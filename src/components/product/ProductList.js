import React, { Component } from 'react'

import  ProductItem  from "./ProductItem";

export class ProductList extends Component {

  showProducts(){
      if (this.props.products) {
          return this.props.products.map((product)=>(
            <ProductItem 
              product={product} 
              key={product.productId} 
              onAddOrder={this.props.onAddOrder}
            />
          ));
      }
  }  

  render() {
    return (
      <div className="ProductList row">
        {this.showProducts()}
      </div>
    )
  }
}

export default ProductList
