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

import SelectCategory from '../Components/SelectCategory';
import { Slugify } from '../utils';

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
const CreateProduct = ({ onCreate, history }) => {
  const classes = useStyles();

  const [product, setProduct] = React.useState({
    title: null,
    description: null,
    images: [],
    category: null,
    price: null,
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
                const data = {
                  title: product.title,
                  description: product.description,
                  category: {
                    connect: {
                      id: product.category,
                    },
                  },
                  slug: Slugify(product.title),
                  images: {
                    create: [...product.images],
                  },
                  brand: product.brand,
                  material: product.material,
                  price: product.price,
                };

                onCreate(data);
              }}
            >
              <Typography>Save Product</Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className={classes.container}>
        <TextField
          id="standard-name"
          label="Name"
          fullWidth
          className={classes.textField}
          margin="normal"
          onChange={handleChange('title')}
          helperText="Product Name"
        />
        {images.length > 0 && (
          <div>
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
          </div>
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
          id="standard-textarea"
          label="Description"
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
          id="standard-name"
          label="Price"
          className={classes.textField}
          type="number"
          margin="normal"
          onChange={handleChange('price')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rp</InputAdornment>
            ),
          }}
          helperText="Please input price in Rupiah"
        />
        <TextField
          id="standard-name"
          label="Brand"
          className={classes.textField}
          margin="normal"
          onChange={handleChange('brand')}
        />
        <TextField
          id="standard-name"
          label="Material"
          className={classes.textField}
          margin="normal"
          onChange={handleChange('material')}
        />
      </Container>
    </React.Fragment>
  );
};
export default withRouter(CreateProduct);
