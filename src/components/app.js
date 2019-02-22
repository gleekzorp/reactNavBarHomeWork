import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigationContainer/navigationContainer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Counter from './pages/counter'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <hr/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/counter" component={Counter} />                
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
