import userProgressReducer, { initialState } from "../../reducers/userProgressReducer";
import { SET_CLIENT_USER_PROGRESS } from "../../actions/actionTypes";

describe("User Progress Reducer", () => {
  it("Should return updated state if parameters are correct", () => {
    const action = {
      type: SET_CLIENT_USER_PROGRESS,
      payload: {
        FirstName: "Freddy",
        LastName: "Krueger",
        Email: "fkrueger@minitab.com",
        Group: "Best Group Ever",
        PercentComplete: 87,
        AverageQuizScore: 66
      }
    };
    const result = userProgressReducer(undefined, action);
    let newState = {
      ...initialState,
      FirstName: "Freddy",
      LastName: "Krueger",
      Email: "fkrueger@minitab.com",
      Group: "Best Group Ever",
      PercentComplete: 87,
      AverageQuizScore: 66
    };
    expect(result).toEqual(newState);
  });

  it("Should return default initial state when none given", () => {
    const result = userProgressReducer(undefined, { type: "NOT_SET_CLIENT_USER_PROGRESS" });
    expect(result).toEqual(initialState);
  });

  it("Should return given state on no action.type match", () => {
    const action = { type: "NOT_SET_CLIENT_USER_PROGRESS", payload: {} };
    const initialState = {
      FirstName: "Saquon",
      LastName: "Barkley",
      Email: "sbarkley@minitab.com",
      Group: "Penn State"
    };
    const result = userProgressReducer(initialState, action);
    expect(result).toEqual(initialState);
  });
});
