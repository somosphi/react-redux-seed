import React from 'react';
import { Route, Switch } from 'react-router-dom';

// screens
import Home from './screens/Home';
import NotFound from './screens/NotFound';

const Router = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Router;
