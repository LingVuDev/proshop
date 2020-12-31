import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from 'axios';

export class ProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    debugger;
    axios.get(`/api/products/${id}`).then(({data}) => {
      debugger;
      this.setState({
        ...this.state,
        product: {...data},
      })
    });
  }

  render() {
    return (
      <div>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={this.state.product.image} alt={this.state.product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{this.state.product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={this.state.product.rating}
                  text={`${this.state.product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: {this.state.product.price} €</ListGroup.Item>
              <ListGroup.Item>
                Description: {this.state.product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col><strong>{this.state.product.price}</strong></Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>{this.state.product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block btn-dark" type="button" disabled={this.state.product.countInStock <= 0}>
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductScreen;
