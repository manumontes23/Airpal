import React, { Component } from 'react';
import Header from './Components/Header.js';
import SignIn from './Components/Signin'
import Home from './Components/Home.js';
import Houses from './Components/Houses.js';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Cookies from './helpers/Cookies.js';
import api from './helpers/api.js';
import AdminList from './Components/AdminList'
import DisplayList from './Components/DisplayList'

class App extends Component {


  state = {
    session_id: null //Admin id saved in cookies for session 
  }
  
  
  componentDidMount(){
    this.getSession();
  }

  /**
   * Checkout for cookies about the session id and saves it in the state
   */
  getSession = () => {
    const session_id = Cookies.getSession();
    if(session_id) {
      this.setState({session_id: session_id})
    };
  }

  /**
   * Calls api logIn method to check if the user exists
   * If user login is successfull, saves the cookies for the session, and executes callback
   * If it doesn't, shows a message to the user
   */
  logCheck = async ( data, redirectCallback ) => {
    try{
      console.log("DATA", data);
      let user = await api.login(data);
      user = await user.json();

      if(!user) throw "NOT USER";

      //Update session_id state
      const session_id = user.ID;
      this.setState({ session_id });
      //We save the session in the cookies
      Cookies.saveSession(user.ID);
      redirectCallback("/home")
    }catch(err){
      this.userNotFound();
    }
  }

  /**
   * TODO this function, I was so sleepy right now, it's 3:57am mf
   */
  userNotFound = () => {
    console.log("USER NOT FOUND");
  }

  /**
   * Bool function to simplify some things about session: Is logged?
   */
  isLoggedIn = () => {
    return !!this.state.session_id;
  }
  
  /**
   * Renders Header component passing throught {props} a bool value for isLoggedId
   *  this value determines if the user is logger or not, and also what's Header going to render
   * 
   * Also, if the user is currently logged, will render the routes for the app
   * Otherwise, it'll render a Redirect for all the paths, in order to make the user log in
   */
  render() {  
    const isLogged = this.isLoggedIn();
    return (
      <Router>
      <div>
        <Header isLoggedIn={isLogged}/>
        <Route exact path="/" 
          render={() => <SignIn isLoggedIn={isLogged} 
          logCheck={this.logCheck}/> } />
        {isLogged ? 
          <div>
          <Route exact path="/houses" render={() =>  <Houses />} />
          <Route exact path="/home" component={Home} />
          <Route exact path='/admin' render={() => <AdminList/>}/>
          <Route exact path='/displays' render={() => <DisplayList />}/>
          </div>
          :
          <Redirect from='*' to='/' />
        }

      </div>
      </Router>
    );
  }
}

export default App;
