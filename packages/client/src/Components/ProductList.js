import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProductItem from './ProductItem';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.containerMargin,
  },
}));

const ProductList = ({ products }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box my={4}>
        <Grid container spacing={2}>
          {products.map(({ product }) => {
            return (
              <Grid item key={product.id} xs={6}>
                <ProductItem product={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            url: PropTypes.string,
          })
        ),
      }),
    })
  ),
};

export default ProductList;
