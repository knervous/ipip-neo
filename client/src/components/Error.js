import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorDisplay from "./reusable/ErrorDisplay";

class Error extends Component {
  render() {
    if (!this.props.error.hasError) {
      window.location.replace(window.location.pathname.replace("error", ""));
    }
    return (
      <div className="desktop-frame">
        <ErrorDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, {})(Error);
