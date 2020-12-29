import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import './Product.css';

export class Product extends Component {
  render() {
    const { product } = this.props;
    return (
  
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </a>
        <Card.Body>
          <a>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                rating={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <h3>{product.price}</h3>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
