import React, { Component } from 'react';
import Header from './Components/Header.js';
import Home from './Components/Home.js';

class App extends Component {

  state = {
    component2render: <Home />
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
