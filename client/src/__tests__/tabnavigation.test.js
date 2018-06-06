import { navigateToTab } from "../actions/tabNavigationAction";
import { NAVIGATE_TO_TAB } from "../actions/actionTypes";

describe("Actions return values", () => {
  it("returns getClaims action with no params", () => {
    expect(navigateToTab()).toEqual({
      type: NAVIGATE_TO_TAB,
      payload: undefined
    });
  });

  it("returns getClaims action with tab param", () => {
    const navTab = "course-player";
    expect(navigateToTab(navTab)).toEqual({
      type: NAVIGATE_TO_TAB,
      payload: navTab
    });
  });
});
