import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/SignIn'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <SignIn />
      </div>
    );
  }
}

export default App;
