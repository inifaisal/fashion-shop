import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import ProductItem from './ProductItem';

const CategoryList = ({ products }) => {
  return (
    <Grid container spacing={1}>
      {products.map(product => {
        return (
          <Grid item key={product.id} xs={6}>
            <ProductItem product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

CategoryList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
    })
  ),
};

export default CategoryList;
