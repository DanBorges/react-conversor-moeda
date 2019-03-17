import React, { Component } from 'react';
import logo from './logo.svg';
import Conversor from './components/Conversor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    );
  }
}

export default App;
