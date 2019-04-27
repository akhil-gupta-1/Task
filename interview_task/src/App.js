import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { ValidateUser, logoutUser } from './actions/login';
import {withRouter} from 'react-router';

class App extends Component {
  state={
    logoutTrue:false
  }
  login = (name, password) => {
    this.props.dispatch(
      ValidateUser(name, password)
    )
  }

  logout = () => {
    this.props.dispatch(
      logoutUser()
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
                    logout={this.logout.bind(this)}
                    userName={this.props.session.UserName}
                    session={this.props.session}
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
  session: PropTypes.object
}

function mapStateToProps(state) {
  return {
    session: state.loginReducer.session
  }
}

export default withRouter(connect(mapStateToProps)(App));
