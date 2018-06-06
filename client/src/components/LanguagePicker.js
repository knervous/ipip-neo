import React, { Component } from "react";
import { connect } from "react-redux";
import { getLanguages, setActiveLanguage } from "react-localize-redux";
import Cookies from "js-cookie";

import { setLocaleForDateTimeFormatting } from "../helpers/dateFormatting";

class LanguagePicker extends Component {
  detectLocale() {
    let localeFound = Cookies.get("locale");

    // No cookie so try to use the one of browser language settings if supported
    if (!localeFound) {
      if (navigator) {
        var navigatorLocales = [];
        if (navigator.userLanguage) {
          navigatorLocales.push(navigator.userLanguage.toLowerCase());
        }
        if (navigator.language) {
          navigatorLocales.push(navigator.language.toLowerCase());
        }

        const supportedLangs = this.props.languages;
        localeFound = navigatorLocales.reduce((prev, curr) => {
          return supportedLangs.find(language => language.code === curr) ? curr : prev;
        }, null);
      }
    }

    return localeFound ? localeFound : "en-US";
  }

  handleLanguageChange = event => {
    const selectedLocale = event.target.value;

    Cookies.set("locale", selectedLocale, { expires: 365 * 2, path: "" });

    this.props.setActiveLanguage(selectedLocale);
    setLocaleForDateTimeFormatting(selectedLocale);
  };

  getLanguageDropDown() {
    return (
      <select
        value={this.props.languages.filter(language => language.active)[0].code}
        onChange={this.handleLanguageChange}
      >
        {this.props.languages.map(language => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    );
  }

  componentWillMount() {
    let currentLocale = this.detectLocale();
    this.props.setActiveLanguage(currentLocale);
    setLocaleForDateTimeFormatting(currentLocale);
  }

  render() {
    return (
      <div className="lang-selector-container">
        <div className="lang-selector-container__select-wrapper">{this.getLanguageDropDown()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languages: getLanguages(state.locale)
  };
};

export default connect(mapStateToProps, { setActiveLanguage })(LanguagePicker);
