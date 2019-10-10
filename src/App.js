import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  handleCounterIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div data-test="counter-parent">
            <div data-test="counter-display">
              <p data-test="counter-title">The Counter is at&nbsp;</p>
              <h1 data-test="counter-count">{this.state.count}</h1>
            </div>
            <br/>
            <button data-test="counter-button" onClick={this.handleCounterIncrement}>
              Increment
            </button>
          </div>
        </header>
      </div>
    );
  }
}
