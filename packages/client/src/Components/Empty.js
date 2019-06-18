import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WarningRoundedIcon className={classes.warningIcon} />

      <Typography className={classes.warningText}>
        Our Product Currently empty, please comeback later!
      </Typography>
    </div>
  );
};
