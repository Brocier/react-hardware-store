//src/components/ShopView

import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList'

class ShopView extends Component {
  render() {
    return (
      <div>
        <h1>Shop View</h1>
        <h2>Products</h2>
        <ProductList productList={this.props.productList}/>
      </div>
    );
  }
}

export default ShopView;