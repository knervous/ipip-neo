import { actionMap } from '../actions';

export async function setAnswer(questionNumber, scaleIndex) {
  if (window.localStorage) {
    window.localStorage.setItem(`testQuestion${questionNumber}`, scaleIndex);
  }
  this.dispatch(actionMap.addTestAnswer(questionNumber, scaleIndex));
}
