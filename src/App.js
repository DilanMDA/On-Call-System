import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/layout/Layout";
import Home from "./containers/Home/Home";
import Todos from "./containers/Todos/Todos";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" container={Home}></Route>
        <Route exact path="/todos" contaienr={Todos}></Route>
        <Redirect to="/"/>
      </Switch>
    </Layout>
  );
};

export default App;
