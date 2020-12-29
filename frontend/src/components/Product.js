import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Product.css";

export class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
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
