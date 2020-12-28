import React, { Component } from "react";
import { Card } from "react-bootstrap";

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
              {product.rating} from {product.numReviews} reviews
            </div>
          </Card.Text>
          <Card.Text as="h3">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Product;
