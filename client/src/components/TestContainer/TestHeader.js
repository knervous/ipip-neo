import React, { Component } from "react";
import { connect } from "react-redux";

class TestHeader extends Component {
  render() {
    return <div>Test Header</div>;
  }
}

const mapStateToProps = state => {
  return {
    testData: state.testData
  };
};

export default connect(mapStateToProps)(TestHeader);
