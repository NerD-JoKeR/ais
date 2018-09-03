import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

export default class FormPage extends Component{
  render(){
    return (
    <div className="container">
      <ButtonToolbar>
        <Button bsStyle="info">Просмотр</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="primary">"Последний индивидуальный полис"</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="success">"Последний групповой полис"</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="info">Уведомления и письма</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="danger">Ваучеры</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="success">Зачисления на полис</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="warning">Оплаты займов</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="warning">Коэффициенты риска</Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="danger">Действия над полисом</Button>
      </ButtonToolbar>
    </div>
    )
  }
}
