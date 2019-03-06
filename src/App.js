import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './containers/SignIn'
import Home from './Components/Home.js';


class App extends Component {

  state = {
    component2render: <SignIn />
  }

  renderComponent = (component2render) => {
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
