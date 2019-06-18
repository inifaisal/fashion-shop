import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import ImageCarousel from './ImageCarousel';
import ProductCategory from './ProductCategory';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.containerMargin,
  },
  imageCarouselContainer: {
    marginBottom: 30,
  },
  productTitle: {
    margin: theme.spacing(1, 0),
  },

  priceAndBuyButtonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  productPrice: {
    fontWeight: 'bold',
  },
  commonContainer: {
    marginBottom: 20,
  },
}));

const ProductDetail = ({ product }) => {
  const classes = useStyles();

  document.title = `${product.title} | Fashion Shop`; // change document title

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Box my={4}>
        <Typography
          variant="h6"
          component="h1"
          className={classes.productTitle}
        >
          {product.title}
        </Typography>
        <div className={classes.priceAndBuyButtonContainer}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.productPrice}
          >
            {product.price}
          </Typography>
          <Button variant="contained" color="primary">
            Beli Sekarang
          </Button>
        </div>
        <div className={classes.imageCarouselContainer}>
          <ImageCarousel images={product.images} />
        </div>

        <div className={classes.commonContainer}>
          <Typography variant="h6" component="h3">
            Bahan Utama
          </Typography>
          <Typography variant="caption" component="p">
            {product.material}
          </Typography>
        </div>

        <div className={classes.commonContainer}>
          <Typography variant="h6" component="h3">
            Detail
          </Typography>
          <Typography variant="caption" component="p">
            {product.description}
          </Typography>
        </div>
        <ProductCategory category={product.category} />
      </Box>
    </Container>
  );
};

export default ProductDetail;
