import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col } from "reactstrap"
import TopNav from './components/TopNav'
import Booklist from './components/BookList'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        < TopNav />
        <Container fluid>
          <Row>
            <Col>
              <Booklist />
            </Col>
            <Col>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
