import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { ValidateUser } from './actions/login'

class App extends Component {
  login = (name, password) => {
    this.props.dispatch(
      ValidateUser(name, password)
    )
  }
  render() {
    if (this.props.session && this.props.session.isAuthenticated) {
      return (
        <div className="App">
          <Router>
            <Route
              key='dashboard'
              path='/'
              render={
                () => 
                  <Dashboard
                  />
              }
            />
          </Router>
        </div>
      );
    }
    else if (!this.props.session.isAuthenticated) {
      return (
        <div className="App">
          <Router>
            <Route
              key='login'
              path='*'
              exact
              render={
                () => (
                  <LoginForm
                    login={this.login}
                  />
                )
              }
            />
          </Router>
        </div>
      )
    }
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  session: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    session: state.loginReducer.session
  }
}

export default connect(mapStateToProps)(App);
