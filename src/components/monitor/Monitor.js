import React, { Component } from 'react'
import axios  from "axios";

import { Calculator } from "./Calculator";
import { ProductList } from "../product/ProductList";

export class Monitor extends Component {

  constructor(props){
    super(props);
    this.state = {
      totalPrice: 0,
      orders : [],
      confirm: false
    }
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.cancleOrder = this.cancleOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }

  addOrder(product){
    let tempOrders = this.state.orders;
    let findOrder = tempOrders.find(order=>{
      return order.product.productId == product.productId;
    })
    if (findOrder) {
      findOrder.quantity++;
    } else {
      tempOrders.push({product: product, quantity: 1});
    }
    let totalPrice = this.state.totalPrice + parseFloat(product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: tempOrders
    })
  }

  delOrder(product){
    let findOrder = this.state.orders.find(order=>order.product.productName === product.productName);
    let restOrders = this.state.orders.filter(order=>order.product.productName !== product.productName);
    let totalPrice = this.state.totalPrice - parseFloat(findOrder.product.unitPrice) * findOrder.quantity;
    this.setState({
      totalPrice: totalPrice,
      orders: restOrders
    });
  }

  cancleOrder(){
    this.setState({totalPrice:0, orders: []})
  }

  confirmOrder(){
    const {totalPrice, orders} = this.state;
    axios.post("http://localhost:3001/orders", {
      orderDate: new Date(),
      totalPrice,
      orders
    }).then(res=>{
      console.log(res);
      this.setState({totalPrice:0, orders: [], confirm:true});
    });
  }

  showConfirmAlert(){
    if (this.state.confirm) {
      setTimeout(()=>{
        this.setState({confirm:false});
      }, 4000);
      return <div className="alert alert-secondary title text-right">
              บันทึกการสั่งซื้อเรียบร้อยแล้ว
            </div>;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div className="Monitor">
        <div className="container-fluid">

            {this.showConfirmAlert()}

            <div className="row">
                <div className="col-md-9">
                    <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                </div>
                <div className="col-md-3">
                    <Calculator 
                      {...this.state} 
                      onDeleteOrder={this.delOrder} 
                      onCancleOrder={this.cancleOrder} 
                      onConfirmOrder={this.confirmOrder}
                    />
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Monitor
