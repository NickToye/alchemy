import { combineReducers } from 'redux';
import colours from './colourReducer';
// import authors from './authorReducer';
// import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  colours,
  // authors,
  // ajaxCallsInProgress
});

export default rootReducer;
