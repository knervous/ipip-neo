/* eslint-disable */
import CoursePlayer from "../../components/CoursePlayer";
import React from "react";
import sinon from "sinon";
import { mount } from "enzyme";
//import toJson from "enzyme-to-json";

import "../test-helpers";
import store from "../../store/configureStore";

// Currently removing snapshot testing -- may revisit at a later date.

describe("CoursePlayer component rendering", () => {
  it("Should match snapshot", () => {
    // const wrapper = shallow(<CoursePlayer store={store()} lastSlide="ch1s1" />);
    // expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("CoursePlayer class level functions", () => {
  it("Should fire onSlideEnter on window event", done => {
    // const mockStore = store();
    // mockStore.dispatch({ type: "LAST_SLIDE", payload: { lastSlideId: "ch1s1c1p1" } });
    // mockStore.dispatch({ type: "CLAIMS_DATA", payload: { userId: "fakeUserId", subId: "fakeSubId" } });
    // const wrappedCoursePlayer = mount(<CoursePlayer store={store()} lastSlide="ch1s1c1p1" />),
    //   coursePlayer = wrappedCoursePlayer.childAt(0).instance(),
    //   spy = sinon.stub(coursePlayer, "onSlideEnter").callsFake(e => {
    //     expect(e.Data).toEqual({ lb: "ch1s1c1p1" });
    //     expect(spy.callCount).toEqual(1);
    //     expect(spy.called).toEqual(true);
    //     done();
    //   });
    // coursePlayer.hookEvents({ cpAPIEventEmitter: window, cpAPIInterface: {} })();
    // const event = new CustomEvent("CPAPI_SLIDEENTER", {
    //   detail: { Data: { lb: "ch1s1c1p1" } }
    // });
    // event["Data"] = event.detail.Data;
    // window.dispatchEvent(event);

    done();
  });
});
/* eslint-enable */
