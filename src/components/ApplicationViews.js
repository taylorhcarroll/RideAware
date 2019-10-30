import { Route, Link, withRouter } from 'react-router-dom';
import React, { Component } from "react";
import Login from './auth/Login'
import RidesList from './rideHistory/RidesList'
import CarsList from './cars/CarsList'
import KidsList from './kids/KidsList'
import LocationsList from './locations/LocationsList'
import UserDash from './dashboardViews/UserDash'
import AdminDash from './dashboardViews/AdminDash'

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
            return <RidesList
                      {...props}
						          {...this.props}/>
          }}
        />

        <Route
          path="/Cars" render={props => {
            return <CarsList
                      {...props}
						          {...this.props}/>
          }}
        />
      <Route
      path="/Children" render={props => {
        return <KidsList
                      {...props}
						          {...this.props}/>
      }}
    />
    <Route
      path="/Locations" render={props => {
        return <LocationsList
                      {...props}
						          {...this.props}/>
      }}
    />
    <Route
      path="/AdminDash" render={props => {
        return <AdminDash
                      {...props}
						          {...this.props}/>
      }}
    />
     <Route
      path="/UserDash" render={props => {
        return <UserDash
                      {...props}
						          {...this.props}/>
      }}
    />
    </React.Fragment>
    );
  }
}
