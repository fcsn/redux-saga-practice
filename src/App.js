import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as Actions from './actions';

class App extends Component {
  render() {
    const { value, store } = this.props
    console.log(value)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <span className="title">You can increase or decrease number.</span>
            <div className="buttons-box">
              <button className="buttons" onClick={this.props.incrementAsync}>
                increase
              </button>
              <div>{value}</div>
              <button className="buttons" onClick={this.props.decrementAsync}>
                decrease
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = {
  decrement: Actions.decrement,
  increment: Actions.increment,
  incrementAsync: Actions.incrementAsync,
  decrementAsync: Actions.decrementAsync,
};

export default connect(
    state => ({
      value: state
    }),
    mapDispatchToProps
)(App);
