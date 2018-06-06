import courseStateReducer, { initialState } from "../../reducers/courseStateReducer";
import {
  SET_CLIENT_COURSE_STATE,
  ADD_CLIENT_SLIDES_VISITED,
  ADD_CLIENT_QUIZ_SCORE,
  REMOVE_CLIENT_QUIZ_SCORE
} from "../../actions/actionTypes";

describe("Course State Reducer", () => {
  it("Should return updated state if parameters are correct", () => {
    const action = { type: SET_CLIENT_COURSE_STATE, payload: { LastSlideNumber: 3, LastSection: "ch2s2" } };
    const result = courseStateReducer(undefined, action);
    let newState = { ...initialState, LastSlideNumber: 3, LastSection: "ch2s2", synced: true };
    expect(result).toEqual(newState);
  });

  it("Should return default state when none given", () => {
    const result = courseStateReducer(undefined, { type: "NOT_SET_CLIENT_COURSE_STATE" });
    expect(result).toEqual(initialState);
  });

  it("Should return given state on no action.type match", () => {
    const action = { type: "NOT_SET_CLIENT_COURSE_STATE", payload: {} };
    const state = { data: "SomethingRelevant" };
    const result = courseStateReducer(state, action);
    expect(result).toEqual(state);
  });

  it("Should add to slides visited if not already visited", () => {
    const action = { type: ADD_CLIENT_SLIDES_VISITED, payload: "ch1s2" };
    const result = courseStateReducer({ ...initialState, SlidesVisited: ["ch1s1"] }, action);
    expect(result.SlidesVisited).toEqual(["ch1s1", "ch1s2"]);
  });

  it("Should not add to slides visited if already visited", () => {
    const action = { type: ADD_CLIENT_SLIDES_VISITED, payload: "ch1s1" };
    const result = courseStateReducer({ ...initialState, SlidesVisited: ["ch1s1"] }, action);
    expect(result.SlidesVisited).toEqual(["ch1s1"]);
  });

  it("Should add to quiz scores correctly", () => {
    const action = { type: ADD_CLIENT_QUIZ_SCORE, payload: { label: "ch1s1_Quiz", score: 5, total: 5 } };
    const result = courseStateReducer({ ...initialState }, action);
    expect(result.QuizScores).toEqual([{ Key: "ch1s1_Quiz", Score: 5, Total: 5 }]);
  });

  it("Should remove from quiz scores correctly", () => {
    const action = { type: REMOVE_CLIENT_QUIZ_SCORE, payload: "ch1s1_Quiz" };
    const result = courseStateReducer(
      { ...initialState, QuizScores: [{ Key: "ch1s1_Quiz", Score: 5, Total: 5 }] },
      action
    );
    expect(result.QuizScores).toEqual([]);
  });
});
