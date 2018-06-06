// import { ajaxObservable, catchObservable } from "../services/ajaxObservableService";
// import {
//   SET_SERVER_LAST_SLIDE,
//   GET_COURSE_STATE,
//   SET_SERVER_AUTO_ADVANCE,
//   SET_SERVER_MUTE_ON,
//   SET_SERVER_QUIZ_SCORE
// } from "../actions/actionTypes";
// import { setClientTocData } from "../actions/tocActions";
// import { setServerUserProgressPercentComplete } from "../actions/userProgressActions";
// import {
//   setClientCourseState,
//   addToClientSlidesVisited,
//   addClientQuizScore,
//   removeClientQuizScore
// } from "../actions/courseStateAction";
// import { setCoursePartsFinished } from "../helpers/tocDataHelper.js";

// export const getCourseStateEpic = action$ =>
//   action$.ofType(GET_COURSE_STATE).mergeMap(action =>
//     ajaxObservable({
//       path: `/api/v1/courseState/userId/${action.payload.userId}/subscriptionId/${action.payload.subId}`
//     })
//       .map(result => {
//         return setClientCourseState(result.response);
//       })
//       .catch(catchObservable)
//   );

// export const setServerLastSlideEpic = (action$, store) =>
//   action$.ofType(SET_SERVER_LAST_SLIDE).mergeMap(action =>
//     ajaxObservable({
//       method: "POST",
//       path: `/api/v1/courseState/userId/${action.payload.userId}/subscriptionId/${action.payload.subId}/slideTracking`,
//       body: {
//         label: encodeURIComponent(action.payload.label),
//         slideNumber: action.payload.slideNumber,
//         lastSection: encodeURIComponent(action.payload.lastSection)
//       }
//     })
//       //eslint-disable-next-line
//       .mergeMap(result => {
//         const returnMap = [
//           setClientCourseState({
//             LastSection: action.payload.lastSection,
//             LastSlideNumber: action.payload.slideNumber
//           })
//         ];

//         const { courseState, tocData } = store.getState();
//         // Only update tocData flags and percent complete if it's a new label
//         if (!courseState.SlidesVisited.includes(action.payload.label)) {
//           const newTocData = JSON.parse(JSON.stringify(tocData));
//           setCoursePartsFinished(newTocData, [...courseState.SlidesVisited, action.payload.label]);
//           const percentComplete = ((courseState.SlidesVisited.length + 1) / tocData.totalPagesInCourse).toFixed(2);
//           returnMap.push(setClientTocData(newTocData));
//           returnMap.push(
//             setServerUserProgressPercentComplete(
//               action.payload.userId,
//               action.payload.subId,
//               parseFloat(percentComplete)
//             )
//           );
//           returnMap.push(addToClientSlidesVisited(action.payload.label));
//         }

//         return returnMap;
//       })
//       .catch(catchObservable)
//   );

// export const setQuizScoreEpic = action$ =>
//   action$.ofType(SET_SERVER_QUIZ_SCORE).mergeMap(action =>
//     ajaxObservable({
//       method: "POST",
//       path: `/api/v1/courseState/userId/${action.payload.userId}/subscriptionId/${
//         action.payload.subId
//       }/quizScoreTracking`,
//       body: {
//         Label: encodeURIComponent(action.payload.label),
//         Score: action.payload.score,
//         Total: action.payload.total,
//         IsRemoving: action.payload.isRemoving
//       }
//     })
//       //eslint-disable-next-line
//       .map(result => {
//         return action.payload.isRemoving
//           ? removeClientQuizScore(action.payload.label)
//           : addClientQuizScore(action.payload.label, action.payload.score, action.payload.total);
//       })
//       .catch(catchObservable)
//   );

// export const setServerMuteOnEpic = action$ =>
//   action$.ofType(SET_SERVER_MUTE_ON).mergeMap(action =>
//     ajaxObservable({
//       method: "POST",
//       path: `/api/v1/courseState/userId/${action.payload.userId}/subscriptionId/${action.payload.subId}/muteOn/${
//         action.payload.muteOn
//       }`
//     })
//       //eslint-disable-next-line
//       .map(result => {
//         return setClientCourseState({
//           MuteOn: action.payload.muteOn
//         });
//       })
//       .catch(catchObservable)
//   );

// export const setServerAutoAdvanceEpic = action$ =>
//   action$.ofType(SET_SERVER_AUTO_ADVANCE).mergeMap(action =>
//     ajaxObservable({
//       method: "POST",
//       path: `/api/v1/courseState/userId/${action.payload.userId}/subscriptionId/${action.payload.subId}/autoAdvance/${
//         action.payload.autoAdvance
//       }`
//     })
//       //eslint-disable-next-line
//       .map(result => {
//         return setClientCourseState({
//           AutoAdvance: action.payload.autoAdvance
//         });
//       })
//       .catch(catchObservable)
//   );
