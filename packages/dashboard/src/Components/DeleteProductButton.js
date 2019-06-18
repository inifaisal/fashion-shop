import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import DeleteIcon from '@material-ui/icons/Delete';

import { GET_PRODUCTS } from '../Containers/Catalog';

const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
    }
  }
`;

const useStyle = makeStyles(theme => ({
  actionButton: {
    margin: theme.spacing(1),
    width: 40,
    height: 40,
  },
}));

const DeleteProductButton = ({ productId }) => {
  const classes = useStyle();
  return (
    <Mutation mutation={DELETE_PRODUCT}>
      {deleteProduct => (
        <Fab
          color="secondary"
          aria-label="Edit"
          className={classes.actionButton}
          onClick={() =>
            deleteProduct({
              variables: { id: productId },
              optimisticResponse: {
                __typename: 'Mutation',
                deleteProduct: {
                  id: productId,
                  __typename: 'deleteProduct',
                },
              },
              update: (proxy, { data: { deleteProduct } }) => {
                const data = proxy.readQuery({
                  query: GET_PRODUCTS,
                  variables: { first: 10 },
                });

                if (data.productsConnection) {
                  data.productsConnection.edges = data.productsConnection.edges.filter(
                    product => product.product.id !== deleteProduct.id
                  );
                }
                proxy.writeQuery({
                  query: GET_PRODUCTS,
                  variables: { first: 10 },
                  data,
                });
              },
            })
          }
        >
          <DeleteIcon fontSize="small" />
        </Fab>
      )}
    </Mutation>
  );
};
export default DeleteProductButton;
