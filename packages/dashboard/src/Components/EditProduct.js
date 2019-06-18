import React from 'react';

import { withRouter } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/ClearOutlined';

import SelectCategory from './SelectCategory';

const useStyles = makeStyles(theme => ({
  toolbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: 80,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  imageInput: {
    display: 'flex',
    alignItems: 'center',
  },
  addImageButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageButtonIcon: {
    marginRight: theme.spacing(1),
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 8,
    width: 120,
  },
  image: {
    width: '100%',
  },
  deleteImageButton: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const EditProduct = ({ productData, history, match, onUpdate }) => {
  const classes = useStyles();

  const [product, setProduct] = React.useState({
    title: productData.title,
    description: productData.description,
    images: [...productData.images],
    category: productData.category.id,
    price: productData.price,
    material: productData.material,
    brand: productData.brand,
  });

  const [image, setImage] = React.useState();

  const { images } = product;

  const handleChange = name => event => {
    setProduct({ ...product, [name]: event.target.value });
  };

  const handleOnChangeImage = event => {
    setImage(event.target.value);
  };

  const handleAddImage = () => {
    const imageItem = images.concat({ url: image, description: '' });
    setProduct({ ...product, images: imageItem });
    setImage('');
  };

  const handleRemoveImage = index => {
    const imageItem = images.splice(0, index);
    setProduct({ ...product, images: imageItem });
  };

  const getImageIds = images => {
    return images.map(image => {
      return { id: image.id };
    });
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="sm" className={classes.toolbarContainer}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Back"
              onClick={history.goBack}
            >
              <ArrowBackIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const data = {};
                if (productData.title !== product.title) {
                  data.title = product.title;
                }

                if (productData.description !== product.description) {
                  data.description = product.description;
                }

                if (productData.category.id !== product.category) {
                  data.category = {
                    connect: {
                      id: product.id,
                    },
                  };
                }

                if (productData.price !== product.price) {
                  data.price = product.price;
                }

                if (productData.material !== product.material) {
                  data.material = product.material;
                }

                if (productData.brand !== product.brand) {
                  data.brand = product.brand;
                }

                // @TODO check images.
                if (images.length > 0) {
                  data.images = {
                    connect: getImageIds(product.images),
                  };
                }

                onUpdate(data);
              }}
            >
              <Typography>Update Product</Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className={classes.container}>
        <TextField
          id="name"
          label="Name"
          fullWidth
          value={product.title}
          className={classes.textField}
          margin="normal"
          onChange={handleChange('title')}
          helperText="Product Name"
        />
        {images.length > 0 && (
          <Grid container spacing={4}>
            {images.map(({ url }, index) => (
              <Grid item xs={3} key={index}>
                <div className={classes.imageContainer}>
                  <img src={url} className={classes.image} alt="" />
                  <div className={classes.deleteImageButton}>
                    <IconButton
                      aria-label="Delete"
                      color="primary"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <ClearIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
        <div className={classes.imageInput}>
          <Grid container>
            <Grid item xs={8}>
              <TextField
                id="product-image"
                value={image}
                label="Image"
                helperText="Please input image Url"
                fullWidth
                onKeyDown={event => {
                  event.key === 'Enter' && handleAddImage();
                }}
                className={classes.textField}
                onChange={handleOnChangeImage}
                margin="normal"
              />
            </Grid>
            <Grid item xs={4} className={classes.addImageButton}>
              <Button
                variant="contained"
                color="primary"
                disabled={!image}
                onClick={handleAddImage}
              >
                <Typography>Add Image</Typography>
              </Button>
            </Grid>
          </Grid>
        </div>
        <TextField
          id="description"
          label="Description"
          value={product.description}
          helperText="Product Description"
          multiline
          fullWidth
          className={classes.textField}
          onChange={handleChange('description')}
          margin="normal"
        />
        <SelectCategory
          onChange={handleChange('category')}
          selectedCategory={product.category}
        />
        <TextField
          id="price"
          label="Price"
          className={classes.textField}
          type="number"
          margin="normal"
          value={product.price}
          onChange={handleChange('price')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rp</InputAdornment>
            ),
          }}
          helperText="Please input price in Rupiah"
        />
        <TextField
          id="brand"
          label="Brand"
          className={classes.textField}
          margin="normal"
          value={product.brand}
          onChange={handleChange('brand')}
        />
        <TextField
          id="material"
          label="Material"
          className={classes.textField}
          margin="normal"
          value={product.material}
          onChange={handleChange('material')}
        />
      </Container>
    </React.Fragment>
  );
};
export default withRouter(EditProduct);
