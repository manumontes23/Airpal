import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/SignIn'
import Home from './Components/Home.js';
import Houses from './Components/Houses.js';
import api from './helpers/api.js';

class App extends Component {

  state = {
    component2render: <SignIn />
  }

  renderComponent = (query) => {
    let component2render = <Home />;
    switch(query){
      case 'h':
        component2render = <Houses houses={api.getHouses()} />
    }
    this.setState({
      component2render
    })
  }
  
  render() {
    return (
      <div className="App">
      <Header renderComponent={this.renderComponent}/>
        {this.state.component2render}  
      </div>
    );
  }
}

export default App;
