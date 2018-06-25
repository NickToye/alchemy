import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function toneReducer(state = initialState.tones, action) {
  switch (action.type) {
    case types.LOAD_TONES_SUCCESS:
      return action.tones;
    default:
      return state;
  }
}
