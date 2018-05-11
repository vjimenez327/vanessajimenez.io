import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';

//Provides navigation routing
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route name='Home' path='/' component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
