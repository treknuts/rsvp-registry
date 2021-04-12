import React from "react";
import RSVP from "./RSVP";
import Registry from "./Registry";
import About from "./About";
import Info from "./Info";
import { Route, Switch } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="relative m-auto h-full md:h-screen w-full md:py-24 bg-cyan-400 md:w-6/12">
      <div className="relative py-3 lg:min-w-xl lg:mx-auto">
        <div className="absolute inset-0 shadow-2xl transform bg-gradient-to-r from-blue to-green -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-pink-200 shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-2xl font-semibold text-blue">
              <Switch>
                <Route path="/rsvp">
                  <RSVP />
                </Route>
                <Route path="/info">
                  <Info />
                </Route>
                <Route path="/registry">
                  <Registry />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
