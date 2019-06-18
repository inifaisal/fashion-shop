import React from 'react';

import { withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

import DeleteProductButton from './DeleteProductButton';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    marginBottom: 10,
  },
  actionButton: {
    margin: theme.spacing(1),
    width: 40,
    height: 40,
  },
  imageContainer: {
    width: 180,
    margin: theme.spacing(1),
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const ProductListItem = ({ product, history }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src={
            product.images.length > 0
              ? product.images[0].url
              : ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn688G88tayXqKMtO0RKxnIFefAB-oyMO-XjmEZOgs7x3bUVp'
          }
          alt="product"
          className={classes.image}
        />
        <div className={classes.actionContainer}>
          <Fab
            color="secondary"
            aria-label="Edit"
            className={classes.actionButton}
            onClick={() => history.push(`/products/edit/${product.id}`)}
          >
            <EditIcon fontSize="small" />
          </Fab>
          <DeleteProductButton productId={product.id} />
        </div>
      </div>
      <Container>
        <Typography variant="h6">{product.title}</Typography>
        <Typography>{product.price}</Typography>
        <Typography>{product.category.title}</Typography>
        <Typography>{product.brand}</Typography>
      </Container>
    </Container>
  );
};

export default withRouter(ProductListItem);
