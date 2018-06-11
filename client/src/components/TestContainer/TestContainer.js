import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import QuestionContainer from "./QuestionContainer";
import TestHeader from "./TestHeader";

class TestContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, pageSize, questions } = this.props.testData;
    const startIndex = index * pageSize;
    const questionsDisplayed = [];
    for (let i = startIndex; i < startIndex + pageSize; i++) {
      questionsDisplayed.push(i + 1);
    }
    return (
      <div className="home-container">
        <TestHeader />
        <QuestionContainer questions={questionsDisplayed} startIndex={startIndex} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testData: state.testData
  };
};

export default connect(mapStateToProps)(TestContainer);
