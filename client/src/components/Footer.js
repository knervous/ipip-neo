import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import LanguagePicker from "./LanguagePicker";

class Footer extends Component {
  state = { dateYear: new Date().getFullYear() };

  render() {
    const { error } = this.props;
    return (
      <footer className="footer">
        <div className="footer__separator"> </div>
        <div className="container footer-container">
          <div className="col-md-1" />
          <div className="col-md-5">
            <p className="footer-container__details">
              {/* Spaces inside the below span tags are necessary for sentence spacing. */}
              <span>Copyright &reg; {`${this.state.dateYear} All rights reserved.`} </span>
            </p>
            <p className="footer-container__details">
              <a href="not implemented" target="_new">
                Privacy policy
              </a>
            </p>
          </div>
          <div className="col-md-5">
            <LanguagePicker className="language-picker" store={this.props.store} />
          </div>
          <div className="col-md-1" />
        </div>

        <div className={classnames("error-ref-id", { hidden: !error })}>{JSON.stringify(error)}</div>
      </footer>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps)(Footer);
