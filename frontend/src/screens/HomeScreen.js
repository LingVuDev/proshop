import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts } from '../store/actions/productListActions';

export class HomeScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(listProducts());
  }

  render() {
    return (
      <div>
        <h1>Latest Products</h1>
        <Row>
          {this.props.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productList.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
