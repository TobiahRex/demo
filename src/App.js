import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hi!!!</h1>
        </header>
      </div>
    );
  }
}
