import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component{
  static contextTypes = {
    user: React.PropTypes.object
  };
  render(){
    return (
      <div className="navbar navbar-inverse navbar-sticky navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">AIS-React</Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right smooth-scroll">
              <li><Link to="home">Главная</Link></li>
              <li><Link to="bank">Банк</Link></li>
              <li><Link to="payments">Выплаты</Link></li>
              <li><Link to="client">Клиент</Link></li>
              <li><Link to="form">Формы</Link></li>
              <li><Link to="contact">Обратная связь</Link></li>
              <li><Link to="login">Войти</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
