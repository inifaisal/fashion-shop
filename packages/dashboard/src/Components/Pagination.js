import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
}));

const Pagination = ({ pageInfo, onChangePage }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      {pageInfo.hasNextPage ? (
        <Button onClick={() => onChangePage(pageInfo.endCursor)}>
          <Typography>Load More</Typography>
        </Button>
      ) : (
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      )}
    </Container>
  );
};
export default Pagination;
