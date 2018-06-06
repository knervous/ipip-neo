import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import { testIncrementIndex, testDecrementIndex } from "../../actions/testDataActions";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "",
      index: 0
    };
  }

  render() {
    const { l10n } = this.props;
    const { index, pageSize, questions } = this.props.testData;
    const startIndex = index * pageSize;
    const questionsDisplayed = [];
    for (let i = startIndex; i < startIndex + pageSize; i++) {
      questionsDisplayed.push(i + 1);
    }

    return (
      <div className="home-container">
        <ul style={{ height: "40vh", maxHeight: "40vh", marginBottom: "60px" }}>
          {questionsDisplayed.map((q, ind) => (
            <li style={{ fontSize: "xx-large", margin: "2vh 0" }}>{`Question ${startIndex + ind + 1}: ${l10n(
              `ui.test.questions.${q}`
            )}`}</li>
          ))}
        </ul>
        <button onClick={this.props.testDecrementIndex}>back</button>
        <button onClick={this.props.testIncrementIndex}>forward</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // let index = state.testData.index * state.testData.pageSize;
  // console.log(index);
  // let texts = [index + 0, index + 1, index + 2, index + 3, index + 4].map(
  //   num => state.locale.translations[`ui.test.questions.${num + 1}.item`]
  // );
  // console.dir(texts);
  // console.dir(texts);
  return {
    testData: state.testData,
    questions: [],
    l10n: getTranslate(state.locale)
  };
};

export default connect(
  mapStateToProps,
  { testIncrementIndex, testDecrementIndex }
)(Test);
