import React, { Component } from 'react'

export default class OrderTable extends Component {


    renderRow(){
        if (this.props.orders.lenght === 0) {
            return (
                <tr>
                    <td colSpan="5"><h1 className="text-center">ไม่มีรายการซื้อสินค้าค่ะ</h1></td>
                </tr>
            )
        } else {
            return this.props.orders.map((order)=>(
                <tr key={'order-' + order.id} className="text-center">
                    <td>{order.id}</td>
                    <td>{(new Date(Date.parse(order.orderDate)).toLocaleString())}</td>
                    <td>{order.totalPrice}</td>
                    <td >
                        <button type="button" onClick={()=>this.props.viewOrderHandler(order)} className="btn btn-warning btn-sm btn-block">
                            <i className="fas fa-search"></i>
                        </button>
                    </td>
                    <td>
                        <button type="button" onClick={()=>this.props.deleteOrderHandler(order)} className="btn btn-danger btn-sm btn-block">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            ));
        }
    }

    render() {
        console.log(this.props.orders);
        
        return (
            <table className="table table-striped table-inverse container" style={{width:"60%", margin:"auto"}}>
                <thead className="thead-inverse bg-danger text-light">
                    <tr className="text-center">
                        <th><i className="fas fa-list-ol"></i> หมายเลข</th>
                        <th><i className="fas fa-calendar-day"></i> วัน - เวลา</th>
                        <th><i className="fas fa-file-invoice-dollar"></i> ยอดรวม (THB)</th>
                        <th style={{width:120}}><i className="far fa-eye"></i> ตรวจสอบ</th>
                        <th style={{width:120}}><i className="fas fa-folder-minus"></i> ลบ</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </table>
        )
    }
}
