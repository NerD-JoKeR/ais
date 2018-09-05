import React, {Component} from 'react';
import {Tab, Table, Row, Col, Nav, NavItem, NavDropdown, MenuItem, Button, ButtonToolbar} from 'react-bootstrap';


export default class HomePage extends Component{
  render(){
    return (
    <div className="container">  
      <div className="container">
        <Tab.Container id="tabs-with-dropdown" defaultActiveKey="first">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="first">Страхователь</NavItem>
                <NavItem eventKey="second">Страхуемые</NavItem>
                <NavItem eventKey="third">Выгодоприобритатель</NavItem>
                <NavDropdown eventKey="3" title="Импорт списка" id="nav-dropdown-within-tab">
                  <MenuItem eventKey="3.1">Действие</MenuItem>
                  <MenuItem eventKey="4">Другое действие</MenuItem>
                  <MenuItem eventKey="5">Что то еще тут можно добавить</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="6">Можно добавить отдельный линк</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col sm={12}>
              <Table striped bordered condensed hover>
                <Tab.Content animation> 
                  <Tab.Pane eventKey="first"> 
                    <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Просмотр</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Уведомления и письма</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Ваучеры</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Последний индивидуальный полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Зачисления на полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Оплаты займов</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Последний групповой полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Коэффициенты риска</Button>
                          </ButtonToolbar></td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Действия над полисом</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody> 
                    <h3> Данные о Страхователе и тд тп </h3>   
                  </Tab.Pane>                  
                  <Tab.Pane eventKey="second">
                   <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info"> Кредит НС </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info"> Кредит Жизнь </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info"> Состояния заявлений </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody> 
                    <h3> Данные о Страхуемых и тд тп </h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary"> Поддержка процессов </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary"> Неподвержденные приказы </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary"> Приказы с гарантированными выплатами </Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody> 
                    <h3> Данные о Выгодоприобритателе и тд тп </h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="3.1">
                  <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Просмотр</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Уведомления и письма</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Ваучеры</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Последний индивидуальный полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Зачисления на полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Оплаты займов</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody>
                    <h3> Действие 1 </h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="4">
                  <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Уведомления и письма</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Ваучеры</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Последний индивидуальный полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Зачисления на полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Оплаты займов</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody>
                    <h3> Другое действие 1 </h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="5">
                    <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Просмотр</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Уведомления и письма</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Ваучеры</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Последний индивидуальный полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Зачисления на полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Оплаты займов</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody>
                    <h3> Что то еще тут можно добавить </h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="6"> 
                    <h3> Формы </h3> 
                    <tbody>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Просмотр</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="info">Уведомления и письма</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Визирование расходов мед.отчетов</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="danger">Ваучеры</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Последний индивидуальный полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="primary">Внести уведомление о получении полиса</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="success">Зачисления на полис</Button>
                          </ButtonToolbar>
                        </td>
                        <td>
                          <ButtonToolbar>
                            <Button bsStyle="warning">Оплаты займов</Button>
                          </ButtonToolbar>
                        </td>
                      </tr>
                    </tbody>
                    <h3> Можно добавить отдельный линк </h3>
                  </Tab.Pane>
                </Tab.Content>
              </Table>  
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
    );
  }
}
