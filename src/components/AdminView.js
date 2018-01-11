import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList'

class AdminView extends Component {
  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        // Your product here
        <ProductList productList={this.props.productList}/>
        <h2>Create a New Product</h2>
        // create product form goes here
      </div>
    );
  }
}

export default AdminView;