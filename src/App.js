import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/SignIn'
import Home from './Components/Home.js';


class App extends Component {

  state = {
    component2render: <SignIn />,
    isLoggedIn: false,
  }

  logCheck(event) {
    //////////TODO: Cambiar la verificación segun el usuarió
    if (event.target.value === 1) {
      this.setState({ isLoggedIn: true})
    }
    console.log(event.target.value)
  }

  render() {
    //Nea aquí a ese loguin como le paso el metodo log Check?
    return (
      <div className="App">
      <Header isLoggedIn = {this.state.isLoggedIn}/>
      
        {this.state.component2render}  
      </div>
    );
  }
}

export default App;
