import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Home from './Home.jsx';
import Test from './Test.jsx';
import './../style/main.less';

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
