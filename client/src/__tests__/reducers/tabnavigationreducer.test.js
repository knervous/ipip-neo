import tabNavigationReducer from "../../reducers/tabNavigationReducer";
import { NAVIGATE_TO_TAB } from "../../actions/actionTypes";

describe("Tab Navigation Reducer", () => {
  it("Should return updated state if parameters are correct", () => {
    const action = { type: NAVIGATE_TO_TAB, payload: "SomePage" };
    const initialState = ["ch1s2", "ch2s1"];
    const result = tabNavigationReducer(initialState, action);
    expect(result).toEqual({ currentTab: "SomePage" });
  });
});
