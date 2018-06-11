import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: ""
    };
  }

  render() {
    const { l10n } = this.props;
    return (
      <div className="home-container">
        <p className="home-title">{l10n("ui.home.title")}</p>
        <p className="home-titleSub">{l10n("ui.home.titleSub")}</p>
        <p className="home-welcome">{l10n("ui.home.welcome")}</p>
        <p className="home-getStarted">{l10n("ui.home.getStarted")}</p>
        <div className="home-start">
          <span>{l10n("ui.home.start")}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    l10n: getTranslate(state.locale)
  };
};

export default connect(mapStateToProps)(Home);
