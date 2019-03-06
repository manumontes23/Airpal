import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './Components/Signin'
import Home from './Components/Home.js';
import Houses from './Components/Houses.js';
import api from './helpers/api.js';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

  state = {
    component2render: null,
    isLoggedIn: false,
  }
  
  logCheck = (event, callback) => {
    //////////TODO: Cambiar la verificación segun el usuarió
    // if (event.target.value === 1){
    if (1 === 1) {
      this.setState({ isLoggedIn: true})
      callback();
    }
  }


  render() {
    //Nea aquí a ese loguin como le paso el metodo log Check?
    return (
      <Router>
      <div>
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <Route exact path="/" render={() => <SignIn logCheck={this.logCheck}/> } />
        <Route exact path="/houses" render={() => <Houses houses={api.getHouses()}/> } />
        <Route exact path="/home" component={Home} />

      </div>
      </Router>
    );
  }
}

export default App;
