import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function typefaceReducer(state = initialState.typefaces, action) {
  switch (action.type) {
    case types.LOAD_TYPEFACES_SUCCESS:
      return action.typefaces;
    default:
      return state;
  }
}
