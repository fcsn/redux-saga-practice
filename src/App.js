import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as Actions from './actions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    const { value } = this.props
    console.log(value)
    return (
      <Router>
        <div>
          <Navigation/>
          <Route exact path="/" component={MainPage}/>
          <Route path="/users/:id" component={UsersPage}/>
        </div>
      </Router>
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
