import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import url from "url";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import TakeTest from "../components/TakeTest/TakeTest";
import About from "../components/About";
import Contact from "../components/Contact";

const history = createHistory();

class AppRouter extends Component {
  componentWillMount() {
    const parsedUrl = url.parse(window.location.href, true);
    if (parsedUrl.query.returnUrl) {
      history.push(parsedUrl.query.returnUrl);
    }
  }

  loadRoutes() {
    return (
      <Switch className="switch-container">
        <Route path="/" component={Home} exact={true} />
        <Route path="/error" component={Error} exact={true} />
        <Route path="/test" component={TakeTest} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
      </Switch>
    );
  }

  render() {
    if (this.props.error && this.props.error.hasError) {
      //history.push("/error");
    }
    return (
      <Router history={history}>
        <div className="main-container">
          <Header />
          {this.loadRoutes()}
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    toastrs: state.toastr.toastrs
  };
};

const appRouter = connect(mapStateToProps)(AppRouter);

export { history, appRouter as default };
