import React from 'react';
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from './Navbar';

import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Landing from './Landing';

import Admin from './admin';



 class App extends React.Component{
  render (){
    return (
      <Router>
      <div>
      <Route exact path='/home' component={Landing} />
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/admin' component={Admin} />
        <Redirect from = '/' to='/home' />


      </Switch>
      <footer />
      </div>
        
      </Router>
    );
  }
}

export default App;
