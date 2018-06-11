import React, { Component } from "react";
import { connect } from "react-redux";
import { getTranslate } from "react-localize-redux";
import { testIncrementIndex, testDecrementIndex } from "../../actions/testDataActions";
import Slider from "rc-slider";
import classnames from "classnames";

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { questionsAnswered: [false, false, false, false, false], sliders: [] };
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.reinitializeSliders = this.reinitializeSliders.bind(this);
  }

  reinitializeSliders() {
    console.log("im here");
    this.setState({ questionsAnswered: [false, false, false, false, false] }, () => {
      this.state.sliders.forEach(slider => {
        console.dir(slider);
        slider.state.value = 3;
      });
    });
  }

  handleBackButton() {
    this.reinitializeSliders();
    this.props.testDecrementIndex();
  }
  handleNextButton() {
    this.reinitializeSliders();
    this.props.testIncrementIndex();
  }
  render() {
    const { l10n, questions, startIndex } = this.props;
    return (
      <div>
        <div>
          {questions.map((q, ind) => {
            const questionAnswered = this.state.questionsAnswered[ind];
            return (
              <div key={startIndex + ind} className="test-question-container">
                <div className="test-question-container__text">{`${l10n(`ui.test.questions.${q}`)}`}</div>
                <div className="test-question-container__line">
                  <div
                    className={classnames("test-question-container__button", {
                      "test-question-container__button--checked": questionAnswered
                    })}
                  >
                    <p>{startIndex + ind + 1}</p>
                  </div>
                  <div className="test-question-container__slider">
                    <Slider
                      ref={a => {
                        if (!this.state.sliders[ind]) {
                          this.setState({ sliders: [...this.state.sliders, a] });
                        }
                      }}
                      onBeforeChange={a => {
                        const answered = this.state.questionsAnswered;
                        answered[ind] = true;
                        console.dir(a);
                        this.setState({ questionAnswered: answered });
                      }}
                      step={1}
                      defaultValue={3}
                      dots
                      min={1}
                      max={5}
                      dotStyle={{
                        borderColor: "lightgrey",
                        marginTop: 9,
                        height: 18,
                        top: -16,
                        borderWidth: 1,
                        borderRadius: 4,
                        background: "grey"
                      }}
                      trackStyle={{ backgroundColor: "#222", height: 2 }}
                      handleStyle={{
                        borderColor: "#5B72D9",
                        height: 24,
                        width: 13,
                        marginTop: -10,
                        backgroundColor: questionAnswered ? "#5B72D9" : "lightgrey",
                        borderRadius: 4
                      }}
                      railStyle={{ backgroundColor: "#222", height: 2 }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="test-question-buttons">
          <div className="home-start" onClick={this.handleBackButton}>
            <span>Back</span>
          </div>
          <div className="home-start" onClick={this.handleNextButton}>
            <span>Next</span>
          </div>
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

export default connect(mapStateToProps, { testIncrementIndex, testDecrementIndex })(QuestionsContainer);
