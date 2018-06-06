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
    console.dir(pageIndex);
    return (
      <div className="home-container">
        <ul style={{ height: "40vh", maxHeight: "40vh", marginBottom: "60px" }}>
          {this.props.questions.map((q, ind, arr) => (
            <li style={{ fontSize: "xx-large", margin: "2vh 0" }}>{`Question ${this.props.testData.index *
              this.props.testData.pageSize +
              ind +
              1}: ${q}`}</li>
          ))}
        </ul>
        <button onClick={this.props.testDecrementIndex}>back</button>
        <button onClick={this.props.testIncrementIndex}>forward</button>
      </div>
    );
  }
}

var pageIndex = 0;

const mapStateToProps = state => {
  let index = state.testData.index * state.testData.pageSize;
  console.log(index);
  let texts = [index + 0, index + 1, index + 2, index + 3, index + 4].map(
    num => state.locale.translations[`ui.test.questions.${num + 1}.item`]
  );
  console.dir(texts);
  console.dir(texts);
  return {
    testData: state.testData,
    questions: texts,
    l10n: getTranslate(state.locale)
  };
};

export default connect(mapStateToProps, { testIncrementIndex, testDecrementIndex })(Test);
