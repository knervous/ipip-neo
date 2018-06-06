import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: ""
    };
  }

  render() {
    const { l10n } = this.props;
    return <div className="home-container">ABOUT PLACEHOLDER</div>;
  }
}

const mapStateToProps = state => {
  return {
    l10n: getTranslate(state.locale)
  };
};

export default connect(mapStateToProps)(Test);
