import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home.jsx';
import Test from './Test.jsx';
import './../style/main.less';

const App = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/test" component={Test} />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
