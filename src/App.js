import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/signin-form'
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
