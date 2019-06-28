import React, { Component } from 'react'
import OrderTable from '../components/OrderTable';
import axios from 'axios';
import tingle from 'tingle.js'
import ReactLoading from 'react-loading';
import confirm from '../services/alert-service';
export default class Order extends Component {

    state = {
        orders: [],
        isLoaded: false
    };

    deleteOrder = (order) => {
        confirm.confirmDeleteOrder(order, 'http://localhost:3001/orders', this)
    }

    viewOrder = (order) => {
        let sumPrice = order.totalPrice;
        let lists = ``;
        order.orders.forEach(e => {
            lists += `<h5 class="text-center">ID:[${e.product.id}] , ${e.product.productName} (ชิ้นละ ${e.product.unitPrice} บาท) x ${e.quantity} = ${e.quantity*e.product.unitPrice} บาท</h5>`
        });
        var modal = new tingle.modal({
            footer: false,
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            cssClass: ['custom-class-1', 'custom-class-2'],
            onOpen: function() {
                console.log('modal open');
            },
            onClose: function() {
                console.log('modal closed');
            },
            beforeClose: function() {
                // here's goes some logic
                // e.g. save content before closing the modal
                return true; // close the modal
                // return false; // nothing happens
            }
        });
        modal.setContent(
            `<h3 class="text-center">รายการสั่งซื้อเลขที่ ${order.id} [${(new Date(Date.parse(order.orderDate)).toLocaleString())}]</h3>` +
            `${lists}` +
            `<h5 class="text-center"><u>รวมทั้งสิ้น</u> ${sumPrice} บาท</h5>`
        );
        modal.open();
    }

    componentDidMount(){
        setTimeout(() => {
            axios.get('http://localhost:3001/orders').then(res=>this.setState({orders:res.data, isLoaded:true}));
        }, 350);
    }

    renderOrders(){
        if (this.state.isLoaded){
          return <OrderTable orders={this.state.orders} deleteOrderHandler={this.deleteOrder} viewOrderHandler={this.viewOrder}/>
        } else {
          return (
            <div>
              <ReactLoading type="bars" color="#FFC107" style={{margin:"auto", width:"20%", height:"20%", paddingBottom:"170px"}}/>
            </div>
          )
        }
    }

    render() {
        return (
            <div>
                {this.renderOrders()}
            </div>
        )
    }
}
