//src/components/ShopView

import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList'

class ShopView extends Component {
  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <ProductList productList={this.props.productList}/>
        <h2>Create a New Product</h2>
        <ProductForm
          addNewProductToProductList={this.props.addNewProductToProductList}/>
      </div>
    );
  }
}

export default ShopView;