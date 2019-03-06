import React, { Component } from 'react';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import SignIn from './containers/signin-form'
class App extends Component {

  state = {
    component2render: <SignIn />
  }

  render() {
    return (
      <div className="App">
      <Header />
        {this.state.component2render}  
      </div>
    );
  }
}

export default App;
