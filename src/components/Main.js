import React from "react";
import RSVP from "./RSVP";
import Registry from "./Registry";
import About from "./About";
import Info from "./Info";
import { Redirect, Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="md:ml-96 my-8 h-screen md:h-screen w-full md:py-24 bg-cyan-400 md:w-6/12">
      <div className="relative py-3 lg:min-w-xl lg:mx-auto">
        <div className="absolute inset-0 shadow-2xl transform bg-gradient-to-r from-blue to-green -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-pink-200 shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-semibold text-blue">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={RSVP}
                  render={() => {
                    <Redirect to="rsvp" />;
                  }}
                />
                <Route path="/rsvp" component={RSVP} />
                <Route path="/info" component={Info} />
                <Route path="/registry" component={Registry} />
                <Route path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
