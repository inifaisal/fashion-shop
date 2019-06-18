import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const GET_CATEGORY = gql`
  query Categories {
    categories {
      id
      title
    }
  }
`;

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));
const SelectCategory = ({ selectedCategory, onChange }) => {
  const classes = useStyles();

  return (
    <Query query={GET_CATEGORY}>
      {({ loading, error, data, fetchMore, refetch }) => {
        if (loading) return <Typography>Loading</Typography>;

        if (error) return <Typography>Error</Typography>;

        return (
          <TextField
            id="standard-select-currency"
            select
            label="Category"
            value={selectedCategory}
            className={classes.textField}
            SelectProps={{
              MenuProps: {},
            }}
            onChange={onChange}
            helperText="Please select product Category"
            margin="normal"
          >
            {data.categories.map(category => (
              <MenuItem key={category.id} value={category.id}>
                {category.title}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    </Query>
  );
};
export default SelectCategory;
