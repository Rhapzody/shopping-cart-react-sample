import Swal from 'sweetalert2';
import axios from 'axios';

export default class AlertService {
    static confirmOrder(orders, url, dis){
        console.log(orders.orders);
        
        if (orders.orders.length === 0) {
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            }).fire({
                type: 'error',
                title: 'กรุณาเพิ่มสินค้าลงในตะกร้า'
            })
            return;
        }
        return Swal.fire({
            title: 'ต้องการที่จะยืนยันการซื้อใช่หรือไม่',
            type: "question",
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            confirmButtonColor: '#C82333',
            cancelButtonText: 'ยกเลิก',
            preConfirm: () => {
                Swal.enableLoading();
                return axios.post(url, orders)
                .then((res)=>{
                    // Swal.dsiableLoading();
                    return res.data;
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
        
                Toast.fire({
                    type: 'success',
                    title: 'ดำเนินการซื้อสำเร็จ'
                })
                console.log(result.value);
                dis.setState({totalPrice:0, orders: []});
                return result.value;
            }
        }).catch(err=>{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            
            Toast.fire({
                type: 'error',
                title: 'เกิดข้อผิดพลาดบางอย่าง'
            })
        });
    }

    static confirmCalcel(callBack){
        return Swal.fire({
            title: 'ต้องการที่จะยกเลิกการซื้อใช่หรือไม่',
            type: "question",
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            confirmButtonColor: '#C82333',
            cancelButtonText: 'ยกเลิก',
            preConfirm: callBack
        })
    }

    static confirmDelete(list, callBack){
        return Swal.fire({
            title: `ต้องการที่จะลบรายการ\n${list}\nใช่หรือไม่`,
            type: "question",
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            confirmButtonColor: '#C82333',
            cancelButtonText: 'ยกเลิก',
            preConfirm: callBack
        })
    }

    static confirmDeleteOrder(order, url, dis){
        return Swal.fire({
            title: `ต้องการที่จะลบ\nรายการสั่งซื้อที่ ${order.id} \nใช่หรือไม่`,
            type: "question",
            showCancelButton: true,
            confirmButtonText: 'ยืนยัน',
            confirmButtonColor: '#C82333',
            cancelButtonText: 'ยกเลิก',
            preConfirm: () => {
                Swal.enableLoading();
                return axios.delete(url + '/' + order.id)
                .then((res)=>{
                    // Swal.dsiableLoading();
                    this.fixData();
                    return res.data;
                });
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.value) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
        
                Toast.fire({
                    type: 'success',
                    title: 'ดำเนินการลบสำเร็จ'
                })
                console.log(result.value);
                let filterd = dis.state.orders.filter((o)=>{
                    return o.id !== order.id
                })
                dis.setState({orders: filterd});
                return result.value;
            }
        }).catch(err=>{
            console.log(err);
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
            
            Toast.fire({
                type: 'error',
                title: 'เกิดข้อผิดพลาดบางอย่าง'
            })
        });
    }

    static async fixData(){
        let products = JSON.parse(this.products);
        await axios.post('http://localhost:3001/products', products[0]);
        await axios.post('http://localhost:3001/products', products[1]);
        await axios.post('http://localhost:3001/products', products[2]);
        await axios.post('http://localhost:3001/products', products[3]);
        await axios.post('http://localhost:3001/products', products[4]);
        await axios.post('http://localhost:3001/products', products[5]);
    }

    static products = `[
        {
            "id":1,
            "productId": "P001",
            "productName": "สลัดผัก",
            "unitPrice": "120",
            "thumbnail": "/images/product/1.jpg"
        },
        {
            "id":2,
            "productId": "P002",
            "productName": "ไก่ทอด",
            "unitPrice": "90",
            "thumbnail": "/images/product/2.jpg"
        },
        {
            "id":3,
          "productId": "P003",
          "productName": "บิงซู",
          "unitPrice": "200",
          "thumbnail": "/images/product/3.jpg"
        },
        {
            "id":4,
          "productId": "P004",
          "productName": "เฟรนฟราย",
          "unitPrice": "140",
          "thumbnail": "/images/product/4.jpg"
        },
        {
            "id":5,
          "productId": "P005",
          "productName": "เค้ก 3 ชั้น",
          "unitPrice": "200",
          "thumbnail": "/images/product/5.jpg"
        },
        {
            "id":6,
          "productId": "P006",
          "productName": "กาแฟ เฮลตี้ฟู้ด",
          "unitPrice": "140",
          "thumbnail": "/images/product/6.jpg"
        }
      ]`;
}