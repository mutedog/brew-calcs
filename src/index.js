import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Abv from './Abv';
import PlatoSg from './PlatoSg';
import './index.css';
import 'react-select/dist/react-select.css';

render ((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/abv" component={Abv}/>
      <Route path="/plato-sg" component={PlatoSg}/>
    </Route>
  </Router>
), document.getElementById('root'))