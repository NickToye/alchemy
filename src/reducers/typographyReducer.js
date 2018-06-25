import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function typographyReducer(state = initialState.typography, action) {
  switch (action.type) {
    case types.LOAD_TYPOGRAPHY_SUCCESS:
      return action.typography;
    default:
      return state;
  }
}
