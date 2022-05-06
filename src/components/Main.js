import React from "react";
import Home from "./Home";
import Registry from "./Registry";
import About from "./About";
import Info from "./Info";
import { Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (
    <main className='min-vh-100 p-md-0 p-4 d-flex flex-column justify-content-center align-items-center'>
      <Switch>
        <Route exact path='/' history={props.history} component={Home} />
        <Route path='/rsvp' component={Home} />
        <Route path='/info' component={Info} />
        <Route path='/registry' component={Registry} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
  );
};

export default Main;
