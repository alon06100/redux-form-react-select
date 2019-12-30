import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from '../configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
