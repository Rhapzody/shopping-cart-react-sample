import React, { Component } from 'react'

export class Calculator extends Component {

  showOrders(orders){
    if (!orders || orders.length === 0) {
      return <li className="text-right text-muted title">ไม่มีออเดอร์ค่ะ</li>;
    } else {
      return orders.map(order=>(
        <li className="text-right text-success title">
            {order.product.productName} x {order.quantity} = {order.quantity * parseFloat(order.product.unitPrice)}
            <button className="btn btn-light btn-sm" onClick={()=>this.props.onDeleteOrder(order.product)}>X</button>
        </li>
      ));
    }
  }

  render() {

    let {totalPrice, orders} = this.props;

    return (
      <div className="Calculator">
        <div>
            <h1 className="text-right">{totalPrice} THB</h1>
            <hr/>
            <ul className="list-unstyled">
              {this.showOrders(orders)}
            </ul>
            <hr/>
            <button className="btn btn-block btn-danger title" onClick={this.props.onConfirmOrder}>ยืนยัน</button>
            <button className="btn btn-block btn-secondary title" onClick={this.props.onCancleOrder}>ยกเลิก</button>
        </div>
      </div>
    )
  }
}

export default Calculator
