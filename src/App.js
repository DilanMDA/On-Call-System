import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/layout/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";
import Login from "./containers/Auth/Login/Login";
import Logout from './containers/Auth/Logout/LogOut';
import SignUp from "./containers/Auth/SignUp/SignUp";


const App = ({ loggedIn }) => {
  console.log(loggedIn);

  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/todos" component={ Todos } /> */ }
        {/* always rout todos page */}
        <Route exact path="/" component={ Todos } /> 
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Redirect to="/" /> */ }
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
