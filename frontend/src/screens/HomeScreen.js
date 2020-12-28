import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

export class HomeScreen extends Component {
  render() {
    return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
            <Col sm={12} md={6} lg={4}>
                <Product product={product}></Product>
            </Col>
            ))}
        </Row>
    </div>
    );
  }
}

export default HomeScreen;
