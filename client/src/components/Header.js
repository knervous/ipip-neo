import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import { ic_accessibility } from "react-icons-kit/md/ic_accessibility";
import Icon from "react-icons-kit";
import { user } from "react-icons-kit/icomoon/user";
import { ic_assignment } from "react-icons-kit/md/ic_assignment";
import { ic_info_outline } from "react-icons-kit/md/ic_info_outline";
import { ic_mail_outline } from "react-icons-kit/md/ic_mail_outline";
import { LinkContainer } from "react-router-bootstrap";

class Header extends React.Component {
  render() {
    const { l10n } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <div className="header">
            <LinkContainer to="/">
              <div className="header-brand">
                <img src="/assets/images/ipip.png" alt="notfound" />
              </div>
            </LinkContainer>
            <LinkContainer to="/test">
              <div className="header-test">
                <span>{l10n("ui.header.takeTest")}</span>
                <Icon size={35} icon={ic_assignment} />
              </div>
            </LinkContainer>
            <LinkContainer to="/about">
              <div className="header-about">
                <span>{l10n("ui.header.about")}</span>
                <Icon size={35} icon={ic_info_outline} />
              </div>
            </LinkContainer>
            <LinkContainer to="/contact">
              <div className="header-contact">
                <span>{l10n("ui.header.contact")}</span>
                <Icon size={35} icon={ic_mail_outline} />
              </div>
            </LinkContainer>
            <div className="header-user">
              <Icon size={45} icon={user} />
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    l10n: getTranslate(state.locale)
  };
};

export default connect(mapStateToProps)(Header);
