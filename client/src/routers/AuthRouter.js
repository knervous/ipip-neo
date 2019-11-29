import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import GlobalState from '../components/GlobalState/GlobalState';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import TestContainer from '../components/TakeTest/TestContainer';
export const ClaimsContext = React.createContext();

export default () => {
  const [userInfo] = useState({});

  return (
    <GlobalState>
      <ClaimsContext.Provider value={userInfo}>
        <div className="main-container">
          <Router>
            <NavBar />
            <div className="main-content">
              <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/test" component={TestContainer} exact={true} />
                <Route path="/about" component={About} exact={true} />
                <Route path="/contact" component={Contact} exact={true} />
                <Redirect to="/" />
              </Switch>
              <Footer />
            </div>
          </Router>
        </div>
      </ClaimsContext.Provider>
    </GlobalState>
  );
};
