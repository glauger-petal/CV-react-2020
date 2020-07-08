import React, { Component } from 'react';

import NavBar from  './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Studies from './components/Studies/Studies'
import Expe from './components/Expe/Expe'
import Contact from './components/Contact/Contact'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Skills />
        <Portfolio />
        <Studies />
        <Expe />
        <Contact />
      </div>
    );
  }
}

export default App;
