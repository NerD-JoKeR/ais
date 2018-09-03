import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import FormPage from './components/form/FormPage';
import ContactPage from './components/contact/ContactPage';
import LoginPage from "./components/auth/LoginPage";
import BankPage from "./components/bank/BankPage";
import PaymentPage from "./components/payments/PaymentPage";
import ClientPage from "./components/client/ClientPage"
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={LoginPage}/>
      <Route path="/bank" exact component={BankPage} />
      <Route path="/payments" exact component={PaymentPage} />
      <Route path="/client" exact component={ClientPage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/form" component={FormPage}/>
      <Route path="/contact" component={ContactPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
