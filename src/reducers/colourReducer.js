import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function colourReducer(state = initialState.colours, action) {
  switch (action.type) {
    case types.LOAD_COLOURS_SUCCESS:
      return action.colours;
    default:
      return state;
  }
}
