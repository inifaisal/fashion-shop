import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: theme.color,
  },
  price: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  title: {
    fontSize: '1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  textContainer: {
    margin: theme.spacing(1),
  },
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Link to={`/products/${product.slug}`} className={classes.link}>
        <img
          src={product.images[0].url}
          alt="product"
          width="100%"
          style={{ borderRadius: 8 }}
        />

        <div className={classes.textContainer}>
          <Typography variant="h2" className={classes.title}>
            {product.title}
          </Typography>
          <Typography variant="caption" className={classes.price}>
            159.000
          </Typography>
        </div>
      </Link>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.arrayOf({
      url: PropTypes.string,
    }),
  }),
};

export default ProductItem;
