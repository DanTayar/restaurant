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

const Landing =() => (<div className='Page'></div>)



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
        <Redirect from = '/' to='/home' />


      </Switch>
      <footer />
      </div>
        
      </Router>
    );
  }
}

export default App;
