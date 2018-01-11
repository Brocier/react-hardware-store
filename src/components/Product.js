// src/components/Product.js

import React, {Component} from 'react';

class Product extends Component {
  deleteProduct = () => {
    this
      .props
      .deleteProductFromProductList(this.props.index)
  }
  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>${price}</div>
        <button onClick={this.deleteProduct}>Delete {productName}</button>
      </div>
    );
  }
}

export default Product;