import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './Components/Signin'
import Home from './Components/Home.js';
import Houses from './Components/Houses.js';
import RT from './Components/RT.js';
import api from './helpers/api.js';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import InfoDisplay from './Components/InfoDisplay.js';

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
        break;
      case 'houses':
        component2render = 
        <div>
          <Grid item>
            <Houses houses={api.getHouses()} />
            <InfoDisplay info={RT}/>
          </Grid>
        </div>
      case 'rt':
        component2render = <RT rt={api.getRT()}/>
    }
    this.setState({
      component2render
    })
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
