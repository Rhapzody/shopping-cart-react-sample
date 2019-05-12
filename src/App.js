import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from "./pages/About";

import Home from "./pages/Home";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
