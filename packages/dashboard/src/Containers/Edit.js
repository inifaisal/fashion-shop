import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import Loading from '../Components/Loading';
import EditProduct from '../Components/EditProduct';
import { GET_PRODUCTS } from './Catalog';

const GET_PRODUCT = gql`
  query Product($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      price
      description
      brand
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

const UPDATE_PRODUCT = gql`
  mutation UpdataProduct($id: ID!, $data: ProductUpdateInput!) {
    updateProduct(where: { id: $id }, data: $data) {
      id
      title
      price
      description
      brand
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

const Edit = ({ history, match }) => {
  return (
    <Query query={GET_PRODUCT} variables={{ id: match.params.id }}>
      {({ loading, error, data, fetchMore, refetch }) => {
        if (loading && !data.product) return <Loading />;

        if (error) return <p>Error</p>;

        return (
          <Mutation mutation={UPDATE_PRODUCT}>
            {updateProduct => (
              <EditProduct
                productData={data.product}
                onUpdate={updateData => {
                  updateProduct({
                    variables: {
                      id: data.product.id,
                      data: { ...updateData },
                    },
                    optimisticResponse: {
                      __typename: 'Mutation',
                      updateProduct: {
                        ...updateData,
                        __typename: 'product',
                      },
                    },
                    update: proxy => {
                      const data = proxy.readQuery({
                        query: GET_PRODUCTS,
                        variables: { first: 10 },
                      });

                      proxy.writeQuery({
                        query: GET_PRODUCTS,
                        variables: { first: 10 },
                        data,
                      });

                      setTimeout(() => history.replace('/'), 500);
                    },
                  });
                }}
              />
            )}
          </Mutation>
        );
      }}
    </Query>
  );
};

export default Edit;
