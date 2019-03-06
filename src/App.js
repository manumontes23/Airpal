import React, { Component } from 'react';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import SignIn from './containers/signin-form'
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
