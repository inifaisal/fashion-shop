import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import CreateProduct from '../Components/CreateProduct';
import { GET_PRODUCTS } from './Catalog';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($data: ProductCreateInput!) {
    createProduct(data: $data) {
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
      createdAt
    }
  }
`;

const Create = ({ history }) => {
  return (
    <Mutation mutation={CREATE_PRODUCT}>
      {createProduct => (
        <CreateProduct
          onCreate={productData =>
            createProduct({
              variables: { data: productData },
              optimisticResponse: {
                __typename: 'Mutation',
                createProduct: {
                  __typename: 'ProductEdge',

                  ...productData,
                },
              },
              update: (proxy, { data: { createProduct } }) => {
                const data = proxy.readQuery({
                  query: GET_PRODUCTS,
                  variables: { first: 10 },
                });

                console.log(data, createProduct, 'update');

                console.log(
                  Object.assign({}, data, {
                    productsConnection: {
                      ...data.productsConnection,
                      edges: [
                        {
                          cursor: createProduct.id,
                          product: createProduct,
                        },
                        ...data.productsConnection.edges,
                      ],
                    },
                  }),
                  'create'
                );

                proxy.writeQuery({
                  query: GET_PRODUCTS,
                  variables: { first: 10 },
                  data: Object.assign({}, data, {
                    ...data,
                    productsConnection: {
                      ...data.productsConnection,
                      edges: [
                        {
                          cursor: createProduct.id,
                          product: createProduct,
                        },
                        ...data.productsConnection.edges,
                      ],
                    },
                  }),
                });

                setTimeout(() => history.replace('/'), 500);
              },
            })
          }
        />
      )}
    </Mutation>
  );
};

export default Create;
