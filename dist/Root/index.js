import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from '../configureStore';
const store = configureStore();

const Root = () => React.createElement(Provider, {
  store: store
}, React.createElement(Router, null, React.createElement(Route, {
  exact: true,
  path: "/",
  component: App
})));

export default Root;