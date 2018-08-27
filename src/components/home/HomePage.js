import React, {Component} from 'react';
import {Tab, Row, Col, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


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
                  <MenuItem eventKey="3.2">Другое действие</MenuItem>
                  <MenuItem eventKey="3.3">Что то еще тут можно добавить</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3.4">Можно добавить отдельный линк</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="first">Данные о Страхователе и тд тп</Tab.Pane>
                <Tab.Pane eventKey="second">Данные о Страхуемых и тд тп</Tab.Pane>
                <Tab.Pane eventKey="third">Данные о Выгодоприобритателе и тд тп</Tab.Pane>
                <Tab.Pane eventKey="3.1">Действие 1</Tab.Pane>
                <Tab.Pane eventKey="3.2">Другое действие 1</Tab.Pane>
                <Tab.Pane eventKey="3.3">Что то еще тут можно добавить</Tab.Pane>
                <Tab.Pane eventKey="3.4">Можно добавить отдельный линк</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
    );
  }
}
