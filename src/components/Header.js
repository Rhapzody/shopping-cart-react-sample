import React, { Component } from 'react';

class Header extends Component {

  constructor(props){
    super(props);
    console.log('constructor');
    
    this.state = {
      date: new Date()
    };
  }

  componentDidMount(){
    console.log('componentDidMount');

    this.timeId = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
    
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.timeId);
  }

  render() {

    console.log('render');
    

    return (
      <div className={"Header"}>
        <div className="container-fluid " style={{padding:"20px"}}>
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-left"><img src="/favicon.ico" alt="logo"/> Healthy Cafe</h1>
            </div>
            <div className="col-md-6">
              <h4 className="text-right">{this.state.date.toLocaleTimeString()}</h4>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Header;