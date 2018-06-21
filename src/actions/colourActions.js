import * as types from './actionTypes';
import courseApi from '../api/coloursApi';
// import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadColoursSuccess(colours) {
  return { type: types.LOAD_COLOURS_SUCCESS, colours };
}

// export function createCourseSuccess(course) {
//   return { type: types.CREATE_COURSE_SUCCESS, course };
// }
//
// export function updateCourseSuccess(course) {
//   return { type: types.UPDATE_COURSE_SUCCESS, course };
// }

export function loadColours() {
  return function(dispatch) {
    // dispatch(beginAjaxCall());

    return courseApi
      .getAllColours()
      .then(colours => {
        dispatch(loadColoursSuccess(colours));
      })
      .catch(error => {
        throw error;
      });
  };
}

// export function saveCourse(course) {
//   return function(dispatch) {
//     dispatch(beginAjaxCall());
//     return courseApi
//       .saveCourse(course)
//       .then(course => {
//         course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
//       })
//       .catch(error => {
//         dispatch(ajaxCallError(error));
//         throw error;
//       });
//   };
// }
