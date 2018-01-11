// src/components/HomePage.js

import React, {Component} from 'react'
import AdminView from './AdminView'
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
    console.log(productList, clickedProduct)
    // productList.push(clickedProduct);
    this.setState({productList})
  }

  render() {
    return (
      <HomePageContainer>
        <div>
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
          <AdminView
            productList={this.state.productList}
            addNewProductToProductList={this.addNewProductToProductList}
            deleteProductFromProductList={this.deleteProductFromProductList}/>
        </div>
      </HomePageContainer>
    )
  }
}

export default HomePage;