import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ProductListItem from './ProductListItem';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 80,
  },
}));

const ProductList = ({ products }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      {products.map(({ product }) => (
        <React.Fragment key={product.id}>
          <ProductListItem product={product} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default ProductList;
