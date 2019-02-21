import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './navigationContainer/navigationContainer'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Counter from './counter'


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Contact" component={Contact} />
              </Switch>
          </div>
        </Router>
        <Counter />
      </div>
    );
  }
}
