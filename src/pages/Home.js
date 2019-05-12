import React, { Component } from 'react';
import axios from "axios";
// import logo from './logo.svg';
// import './Home.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from "../components/monitor/Monitor";
// import ProductItem from './components/product/ProductItem';
// import ProductItems from './components/ProductItems';

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : []
    };
  }

  componentDidMount(){
    // fetch("http://localhost:3001/products",{
    //   method:"GET"
    // })
    // .then(res=>res.json())
    // .then(obj=>{
    //   this.setState({
    //     products: obj
    //   });
    // });


    axios.get("http://localhost:3001/products")
    .then(res=>{
      console.log(res.data);
      this.setState({
        products: res.data
      });
    })
  }

  render() {

    let company = "Rhapzody";
    // let products = {name:['Orange', 'Homele', 'Avocado'], price:[10, 20, 30]}

    return (
      <div className="Home">
        <Header/>
        <Monitor products={this.state.products}/>
        {/* <ProductItems productName={products.name} unitPrice={products.price}/> */}
        <Footer company={company} email="peeratat1995@gmail.com"/>
      </div>
    );
  }
}

export default Home;