import * as types from './actionTypes';
import typographyApi from '../api/typographyApi';

export function loadTypographySuccess(typography) {
  return { type: types.LOAD_TYPOGRAPHY_SUCCESS, typography };
}

export function loadTypefacesSuccess(typefaces) {
  return { type: types.LOAD_TYPEFACES_SUCCESS, typefaces };
}

export function loadTypography() {
  return function(dispatch) {
    return typographyApi
      .getAllTypography()
      .then(typography => {
        dispatch(loadTypographySuccess(typography));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadTypefaces() {
  return function(dispatch) {
    return typographyApi
      .getAllTypefaces()
      .then(typefaces => {
        dispatch(loadTypefacesSuccess(typefaces));
      })
      .catch(error => {
        throw error;
      });
  };
}
