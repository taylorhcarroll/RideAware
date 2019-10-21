import { Route, Link, withRouter } from 'react-router-dom';
import React, { Component } from "react";
import Login from './auth/Login'

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
          }}
        />

        <Route
          path="/Login" render={props => {
            return <Login
                      {...props}
						          {...this.props}/>
          }}
        />

        <Route
          path="/RideHistory" render={props => {
            return RidesList
          }}
        />

        <Route
          path="/Cars" render={props => {
            return CarsList
          }}
        />
      <Route
      path="/Children" render={props => {
        return KidList
      }}
    />
    <Route
      path="/Location" render={props => {
        return Locations
      }}
    />
    <Route
      path="/AdminDash" render={props => {
        return AdminDash
      }}
    />
     <Route
      path="/UserDash" render={props => {
        return UserDash
      }}
    />
    </React.Fragment>
    );
  }
}
