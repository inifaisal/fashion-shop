import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(20, 0),
    flexDirection: 'column',
  },
  loadMoreContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: theme.spacing(1),
  },
}));

export default ({ isLoadMore }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" style={{ marginTop: 90 }}>
      <Box my={4}>
        <Container
          className={isLoadMore ? classes.loadMoreContainer : classes.container}
        >
          <CircularProgress />
          <Typography variant="body1" className={classes.text}>
            Loading...
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};
