import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import GlobalState from "../components/GlobalState/GlobalState";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import {TestContainer} from "../components/TakeTest/TestContainer";

export default () => {
  return (
    <GlobalState>
      <div className='main-container'>
        <Router>
          <NavBar />
          <div className='main-content'>
            <Switch>
              <Route path='/' component={Home} exact={true} />
              <Route path='/test' component={TestContainer} exact={true} />
              <Route path='/about' component={About} exact={true} />
              <Route path='/contact' component={Contact} exact={true} />
              <Redirect to='/' />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </GlobalState>
  );
};
