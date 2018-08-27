import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import FormPage from './components/form/FormPage';
import ContactPage from './components/contact/ContactPage';
import LoginPage from "./components/auth/LoginPage";
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/form" component={FormPage}/>
      <Route path="/contact" component={ContactPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
