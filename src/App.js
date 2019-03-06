import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/SignIn'
import Home from './Components/Home.js';


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
