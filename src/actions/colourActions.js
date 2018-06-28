import * as types from './actionTypes';
import coloursApi from '../api/coloursApi';

export function loadColoursSuccess(colours) {
  return { type: types.LOAD_COLOURS_SUCCESS, colours };
}

export function createColoursSuccess(colour) {
  return { type: types.CREATE_COLOURS_SUCCESS, colour };
}

export function loadTonesSuccess(tones) {
  return { type: types.LOAD_TONES_SUCCESS, tones };
}

export function loadColours() {
  return function(dispatch) {
    return coloursApi
      .getAllColours()
      .then(colours => {
        dispatch(loadColoursSuccess(colours));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadTones() {
  return function(dispatch) {
    return coloursApi
      .getAllTones()
      .then(tones => {
        dispatch(loadTonesSuccess(tones));
      })
      .catch(error => {
        throw error;
      });
  };
}
