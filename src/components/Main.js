import React from "react";
import RSVP from "./RSVP";
import Registry from "./Registry";
import About from "./About";
import Info from "./Info";
import { Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (
              <Switch>
                <Route
                  exact
                  path="/"
                  history={props.history}
                  component={RSVP}
                />
                <Route path="/rsvp" component={RSVP} />
                <Route path="/info" component={Info} />
                <Route path="/registry" component={Registry} />
                <Route path="/about" component={About} />
              </Switch>
  );
};

export default Main;
