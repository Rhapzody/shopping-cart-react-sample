import React, { Component } from 'react'
import './ProductItems.scss'

class ProductItems extends Component {

    constructor(props){
        super(props);
        console.log("constructor:ProductItems");
    }

    render() {
        return (
        <div className="ProductItems">
            <div style={{width:'30%', float:'left'}}>
                <p>ชื่อสินค้า: {this.props.productName[0]}</p>
                <p>ราคา: {this.props.unitPrice[0]}</p>
            </div>
            <div style={{width:'30%', float:'left'}}>
                <p>ชื่อสินค้า: {this.props.productName[1]}</p>
                <p>ราคา: {this.props.unitPrice[1]}</p>
            </div>
            <div style={{width:'30%', float:'left'}}>
                <p>ชื่อสินค้า: {this.props.productName[2]}</p>
                <p>ราคา: {this.props.unitPrice[2]}</p>
            </div>
            <div style={{clear:'both'}}></div>
            <hr/>
        </div>
        )
    }
}

export default ProductItems;