import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Typography } from '@material-ui/core';

import CategoryList from './CategoryList';
import Error from './Error';
import Loading from './Loading';

const GET_PRODUCT_BY_CATEGORY = gql`
  query Products($categoryId: ID!) {
    products(where: { category: { id: $categoryId } }, first: 4) {
      id
      title
      price
      images {
        id
        url
      }
      slug
      material
      category {
        id
        title
      }
    }
  }
`;
const ProductCategory = ({ category }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" component="h3">
        Produk Mirip Lainnya
      </Typography>
      <Query
        query={GET_PRODUCT_BY_CATEGORY}
        fetchPolicy="cache-and-network"
        variables={{ categoryId: category.id }}
      >
        {({ loading, error, data, fetchMore, refetch }) => {
          if (loading && !data.products) return <Loading />;
          if (error) return <Error onTryAgain={refetch} />;

          return <CategoryList products={data.products} />;
        }}
      </Query>
    </React.Fragment>
  );
};

export default ProductCategory;
