import Header from "../components/Header";
import Footer from "../components/Footer";

import React from 'react'

function About() {
let company = "Rhapzody";
  return (
    <div>
        <Header/>
        <div className="container col-md-5">
            <h3>สวัสดีครับ</h3>
            <p className="title text-justify mt-4 mb4">
                ร้านอาหาเพื่อสุขภาพ อร่อยๆ สดๆ ใหม่ๆ แคลอรี่ตำ ไม่รู้จะพิมพ์ไรแล้วสัส พอ
            </p>
            <h4 className="text-success">จาก เฮลตี้ คาเฟ่</h4>
        </div>
        <hr/>
        <Footer company={company} email="peeratat1995@gmail.com"/>
    </div>
  )
}

export default About

