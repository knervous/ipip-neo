import { combineEpics } from "redux-observable";

import * as courseState from "./courseStateEpic";

export const epics = combineEpics();
// courseState.getCourseStateEpic,
// courseState.setServerLastSlideEpic,
// courseState.setServerAutoAdvanceEpic,
// courseState.setServerMuteOnEpic,
// courseState.setQuizScoreEpic
