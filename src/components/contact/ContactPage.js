import React, {Component} from 'react';
import{Table} from 'react-bootstrap';

export default class ContactPage extends Component{
  render(){
    return (
    <div className="container">
      <br></br>
        <h1>Свяжитесь с нами</h1>
      <br></br>
        <h5>
          Эта страница имеет данные о наших программистах. Если возникнут вопросы, обращяйтесь по контактам указанные ниже! 
        </h5>
        <br></br>
        <br></br>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ФИО</th>
              <th>Внутренний номер</th>
              <th>Почта</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>А.Рыбалов</td>
              <td></td>
              <td>a.rybalov@asia-life.kz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>К.Ешпанов</td>
              <td></td>
              <td>k.yeshpanov@asia-life.kz</td>
            </tr>
            <tr>
              <td>#</td>
              <td colSpan="2">Asia-Life company</td>
              <td>@asia-life.kz</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <br></br>
        <br></br>
        <h5>О АИС</h5>
        <p>
        <h6>Этой программой разрешено пользоваться только ПРОГРАММИСТАМ! </h6>
        </p>
      <br></br>
    </div>
    )
  }
}
