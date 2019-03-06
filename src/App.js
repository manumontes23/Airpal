import React, { Component } from 'react';
import Header from './Components/Header.js';
<<<<<<< HEAD
import Signin from './Components/Signin.js';
=======
import SignIn from './containers/SignIn'
import Home from './Components/Home.js';
import Houses from './Components/Houses.js';
>>>>>>> c3b07d7dfc456e447d22dfaa4579ecae820bf6ff
import api from './helpers/api.js';

class App extends Component {

  state = {
    component2render: null,
    isLoggedIn: false,
  }


  renderComponent = (query) => {
    let component2render;
    switch(query){
      case 'home':
        component2render = <Home />
        break;
      case 'login':
        component2render = <SignIn logCheck={this.logCheck}/>  
      break
      case 'houses':
        component2render = <Houses houses={api.getHouses()} />
    }
    this.setState({
      component2render
    })
  }
  
  logCheck = (event) => {
    //////////TODO: Cambiar la verificación segun el usuarió
    //if (event.target.value === 1) {
      this.setState({ isLoggedIn: true})
    //}
    this.renderComponent('home');
  }

  componentDidMount(){
    this.renderComponent('login');
  }

  render() {
<<<<<<< HEAD
    console.log("OA");
    api.findAdmin("OA");
    return (
      <div className="App">
      <Header />
       <Signin/>

=======
    //Nea aquí a ese loguin como le paso el metodo log Check?
    return (
      <div className="App">
       <Header renderComponent={this.renderComponent} isLoggedIn = {this.state.isLoggedIn}/>
        {this.state.component2render}  
>>>>>>> c3b07d7dfc456e447d22dfaa4579ecae820bf6ff
      </div>
    );
  }
}

export default App;
