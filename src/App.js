import React, { Component } from 'react';
import Header from './Components/Header.js';
import Signin from './Components/Signin.js';
import api from './helpers/api.js';

class App extends Component {
  render() {
    console.log("OA");
    api.findAdmin("OA");
    return (
      <div className="App">
      <Header />
       <Signin/>

      </div>
    );
  }
}

export default App;
