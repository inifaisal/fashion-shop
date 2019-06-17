import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Detail } from './Containers';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/products/:slug" exact component={Detail} />
    </Router>
  );
}

export default App;
