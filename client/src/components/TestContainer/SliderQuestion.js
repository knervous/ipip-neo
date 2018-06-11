import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import { testIncrementIndex, testDecrementIndex } from "../../actions/testDataActions";
import Slider from "rc-slider";
import classnames from "classnames";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAnswered: [false, false, false, false, false]
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
        <ul style={{ height: "40vh", maxHeight: "40vh", marginBottom: "360px", padding: "0 20px" }}>
          {questionsDisplayed.map((q, ind) => (
            <div className="test-question-container">
              <div style={{ fontSize: "large", margin: "2vh 0" }}>{`${l10n(`ui.test.questions.${q}`)}`}</div>
              <div className="test-question-container__line">
                <div
                  className={classnames(
                    { "test-question-container__button--checked": this.state.questionsAnswered[ind] },
                    { "test-question-container__button--unchecked": !this.state.questionsAnswered[ind] }
                  )}
                >
                  {startIndex + ind + 1}
                </div>
              </div>
              <Slider
                step={1}
                defaultValue={3}
                dots
                min={1}
                max={5}
                dotStyle={{
                  borderColor: "rgba(0,0,0,.4)",
                  marginTop: 9,
                  height: 18,
                  top: -12,
                  borderWidth: 1,
                  borderRadius: 4,
                  background: "rgba(0,0,0,.2)"
                }}
                //activeDotStyle={{ borderColor: "yellow", height: 28, width: 20, background: "red" }}
                trackStyle={{ backgroundColor: "lightgrey", height: 10 }}
                handleStyle={{
                  borderColor: "#5B72D9",
                  height: 24,
                  width: 13,
                  marginTop: -6,
                  backgroundColor: "#5B72D9",
                  borderRadius: 4
                }}
                railStyle={{ backgroundColor: "lightgrey", height: 10 }}
              />
            </div>
          ))}
        </ul>
        <button onClick={this.props.testDecrementIndex}>back</button>
        <button onClick={this.props.testIncrementIndex}>forward</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testData: state.testData,
    questions: [],
    l10n: getTranslate(state.locale)
  };
};

export default connect(mapStateToProps, { testIncrementIndex, testDecrementIndex })(Test);
