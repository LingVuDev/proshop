import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from 'axios';

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('/api/products').then(({data}) => {
      this.setState({
        ...this.state,
        products: [...data],
      })
    });
  }

  render() {


    return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {this.state.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product}></Product>
            </Col>
            ))}
        </Row>
    </div>
    );
  }
}

export default HomeScreen;
