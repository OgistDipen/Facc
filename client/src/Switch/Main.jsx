import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Schedule from "../pages/Schedule";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

const GuestSwitch = () => (
  <Switch>
    <Route exact path="/auth/register" component={Register} />
    <Route exact path="/auth/login" component={Login} />
    <Redirect to="/auth/login" />
  </Switch>
);

const UserSwitch = () => (
  <Switch>
    <Route exact path="/schedule" component={Schedule} />
    <Route exact path="/auth/register" component={Register} />
    <Route exact path="/auth/login" component={Login} />
    <Redirect to="/schedule" />
  </Switch>
);

class Main extends Component {
  render() {
    let routes;

    switch (localStorage.getItem("user")) {
      case null:
        routes = <GuestSwitch />;
        break;
      default:
        routes = <UserSwitch />;
    }

    return routes;
  }
}

export default Main;
