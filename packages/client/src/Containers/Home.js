import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Components/Loading';
import ProductList from '../Components/ProductList';
import Error from '../Components/Error';
import Empty from '../Components/Empty';

const GET_PRODUCTS = gql`
  query Products($first: Int, $after: String) {
    productsConnection(first: $first, after: $after) {
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

export default () => (
  <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="sm">
          <Typography variant="h6" component="a" noWrap>
            Fashion Shop
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>

    <Query query={GET_PRODUCTS} variables={{ first: 20 }}>
      {({ loading, error, data, fetchMore, refetch }) => {
        if (loading && !data.productsConnection) return <Loading />;

        if (error) return <Error onTryAgain={refetch} />;

        const products = data.productsConnection.edges;
        const pageInfo = data.productsConnection.pageInfo;

        if (products.length === 0) return <Empty />;

        return (
          <InfiniteScroll
            style={{ overflow: 'hidden' }}
            dataLength={products.length}
            next={() => {
              fetchMore({
                variables: {
                  first: 20,
                  after: pageInfo.endCursor,
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
            hasMore={pageInfo.hasNextPage}
            loader={<Loading isLoadMore />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <ProductList products={products} />
          </InfiniteScroll>
        );
      }}
    </Query>
  </React.Fragment>
);
