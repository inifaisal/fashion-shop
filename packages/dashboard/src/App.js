import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Catalog, Create, Edit } from './Containers';

export default () => (
  <Router>
    <Route path="/" exact component={Catalog} />
    <Route path="/products/new" exact component={Create} />
    <Route path="/products/edit/:id" exact component={Edit} />
  </Router>
);
