import { actionMap } from "../actions";
import * as Api from "../../services/apiService";

export async function setAnswer (questionNumber, scaleIndex) {
  if (window.localStorage) {
    window.localStorage.setItem(`testQuestion${questionNumber}`, scaleIndex);
  }
  this.dispatch(actionMap.addTestAnswer(questionNumber, scaleIndex));
}

export async function finishTest () {
  const {
    test: { questionsAnswered, testType, user }
  } = this.getState();
  const testData = { questionsAnswered, testType };
  return Api.postResults(user, testData);
}
