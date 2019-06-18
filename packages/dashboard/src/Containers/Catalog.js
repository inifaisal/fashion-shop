import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import ProductList from '../Components/ProductList';
import Pagination from '../Components/Pagination';
import Empty from '../Components/Empty';

const useStyles = makeStyles(theme => ({
  toolbarContainer: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  newButton: {
    textDecoration: 'none',
  },
}));

export const GET_PRODUCTS = gql`
  query Products($first: Int, $after: String) {
    productsConnection(first: $first, after: $after, orderBy: createdAt_DESC) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        product: node {
          id
          description
          title
          brand
          price
          slug
          images {
            url
            id
          }
          category {
            title
            id
          }
        }
      }
    }
  }
`;

const Catalog = ({ history }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="sm" className={classes.toolbarContainer}>
            <Typography
              variant="h6"
              component="a"
              noWrap
              className={classes.title}
            >
              Fashion Shop
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/products/new')}
            >
              <Typography>New Product</Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Query query={GET_PRODUCTS} variables={{ first: 10 }}>
        {({ loading, error, data, fetchMore, refetch }) => {
          if (loading && !data.productsConnection) return <p>Loading</p>;

          if (error) {
            return <p>Error</p>;
          }

          const products = data.productsConnection.edges;
          const pageInfo = data.productsConnection.pageInfo;

          if (products.length === 0) return <Empty />;

          return (
            <React.Fragment>
              <ProductList products={products} />
              <Pagination
                pageInfo={pageInfo}
                onChangePage={cursor => {
                  fetchMore({
                    variables: {
                      first: 10,
                      after: cursor,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;

                      return Object.assign({}, prev, {
                        productsConnection: {
                          __typename: prev.productsConnection.__typename,
                          pageInfo: fetchMoreResult.productsConnection.pageInfo,
                          edges: [
                            ...prev.productsConnection.edges,
                            ...fetchMoreResult.productsConnection.edges,
                          ],
                        },
                      });
                    },
                  });
                }}
              />
            </React.Fragment>
          );
        }}
      </Query>
    </React.Fragment>
  );
};

export default Catalog;
