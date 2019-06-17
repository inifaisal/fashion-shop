import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import Button from '@material-ui/core/Button';

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
  },
}));

const Error = ({ onTryAgain }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningRoundedIcon className={classes.warningIcon} />

      <Typography className={classes.warningText}>
        Something when wrong, cannot complete your request.
      </Typography>

      <Button variant="contained" color="primary" onClick={onTryAgain}>
        <Typography>Try Again</Typography>
      </Button>
    </div>
  );
};

Error.propTypes = {
  onTryAgain: PropTypes.func,
};
export default Error;
