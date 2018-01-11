// src/components/HomePage.js

import React, {Component} from 'react'
import AdminView from './AdminView'
import ShopView from './ShopView'
import styled from 'styled-components'

const HomePageContainer = styled.div `
display: flex;
justify-content: center;
 h1{
   padding: 10px;
   background-color: #ff5000;
   color: white;
 }
`

class HomePage extends Component {

  constructor() {
    super()
    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      adminView: false,
      editSaleItem: false,
      productList: [
        {
          productName: 'Hammer',
          description: 'It is a hammer',
          price: 12.3
        }, {
          productName: 'Nail',
          description: 'It is a nail',
          price: 0.12
        }
      ]
    }
  }
  toggleAdminView = () => {
    const adminView = !this.state.adminView
    this.setState({adminView})
  }
  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  }
  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    this.setState({itemCurrentlyOnSale});
  }
  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({productList});
  }
  deleteProductFromProductList = (clickedProduct) => {
    const productList = [...this.state.productList];
    productList.splice(clickedProduct, 1);
    this.setState({productList})
  }

  render() {
    return (
      <HomePageContainer>
        <div>
          <button onClick={this.toggleAdminView}>
            {this.state.adminView
              ? 'Admin'
              : 'Customer'}</button>
          <h1>My Hardware Store</h1>
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem
                ? 'Hide'
                : 'Edit Sale Item'}</button>

          </span>

          {this.state.editSaleItem
            ? <div>
                <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text"/>
              </div>
            : null}

          {this.state.adminView
            ? <AdminView
                productList={this.state.productList}
                addNewProductToProductList={this.addNewProductToProductList}
                deleteProductFromProductList={this.deleteProductFromProductList}/>
            : null}

          {this.state.adminView
            ? null
            : <ShopView
              productList={this.state.productList}
              adminView={this.state.adminView}/>}

        </div>
      </HomePageContainer>
    )
  }
}

export default HomePage;