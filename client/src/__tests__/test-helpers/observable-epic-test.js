import { Observable } from "rxjs";

import { ActionsObservable } from "redux-observable";

const defaultEpicTestOptions = {
  state: {
    courseState: {
      AutoAdvance: true,
      MuteOn: false,
      LastSection: "ch1s1",
      LastSlideNumber: 1,
      SlidesVisited: [],
      QuizScores: [],
      synced: false
    },
    userProgress: {
      FirstName: "",
      LastName: "",
      Email: "",
      Group: "",
      PercentComplete: 0.0,
      AverageQuizScore: 0.0
    },
    tocData: {
      chapters: {}
    }
  }
};

export const createMockStore = (state = {}) => ({
  getState() {
    return state;
  },
  subscribe(func) {
    func();
  },
  isInTestMode: true
});

export function execObservableEpicTest(actionOrObservable, epic, done, verify, options = {}) {
  options = {
    ...defaultEpicTestOptions,
    ...options
  };

  let mockStore = options.store || createMockStore(options.state || {});
  if (!mockStore.hasOwnProperty("isInTestMode")) {
    mockStore.isInTestMode = true;
  }

  let observable =
    actionOrObservable instanceof Observable ? actionOrObservable : ActionsObservable.of(actionOrObservable);
  if (!epic) {
    epic = action$ => action$;
  }
  epic(observable, mockStore)
    .toArray()
    .map(actions => (options.transform ? options.transform(actions) : actions))
    .do(actions => verify(actions))
    .subscribe({
      error: err => done.fail(err),
      complete: () => done()
    });
}
