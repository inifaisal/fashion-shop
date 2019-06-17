import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Loading from '../Components/Loading';
import Error from '../Components/Error';

import ProductDetail from '../Components/ProductDetail';

const GET_PRODUCT_DETAIL = gql`
  query Product($slug: String!) {
    product(where: { slug: $slug }) {
      id
      title
      price
      description
      images {
        url
        id
      }
      material
      category {
        id
        title
      }
    }
  }
`;

const Detail = ({ match, history }) => {
  window.scrollTo(0, 0); //scroll top top every page transition

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="sm">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Back"
              onClick={history.goBack}
            >
              <ArrowBackIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      <Query
        query={GET_PRODUCT_DETAIL}
        fetchPolicy="cache-and-network"
        variables={{ slug: match.params.slug }}
      >
        {({ loading, error, data, fetchMore, refetch }) => {
          if (loading && !data.product) return <Loading />;

          if (error) return <Error onTryAgain={refetch} />;

          return <ProductDetail product={data.product} />;
        }}
      </Query>
    </div>
  );
};

export default Detail;
