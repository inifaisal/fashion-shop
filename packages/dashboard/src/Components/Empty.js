import React from 'react';

import { withRouter } from 'react-router';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import WarningRoundedIcon from '@material-ui/icons/WarningRounded';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(20),
    justifyContent: 'center',
    flexDirection: 'column',
  },
  warningIcon: {
    fontSize: 80,
  },
  warningText: {
    margin: 20,
    textAlign: 'center',
  },
}));

export default withRouter(({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningRoundedIcon className={classes.warningIcon} />

      <Typography className={classes.warningText}>
        No Product, please Add Product.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/products/new')}
      >
        <Typography>Add New Product</Typography>
      </Button>
    </div>
  );
});
