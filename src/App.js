import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/layout/Layout";
// import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";
import Login from "./containers/Auth/Login/Login";
import Logout from "./containers/Auth/Logout/LogOut";
import SignUp from "./containers/Auth/SignUp/SignUp";
import VerifyEmail from "./containers/Auth/VerifyEmail/VerifyEmail";
import RecoverPassword from "./containers/Auth/RecoverPassword/RecoverPassword";
import Profile from "./containers/Auth/Profile/Profile";

const App = ({ loggedIn, emailVerified }) => {
  // console.log(loggedIn);

  let routes;
  // if (!loggedIn && !emailVerified) {
  //   routes = (
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route exact path="/login" component={Login} />
  //       <Route exact path="/signup" component={SignUp} />
  //       <Route exact path="/recover" component={RecoverPassword} />
  //       {/* <Redirect to="/" /> */}
  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/todos" component={ Todos } /> */}
        {/* always rout todos page */}
        <Route exact path="/" component={ Todos } />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        {/* <Redirect to="/" /> */}
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
