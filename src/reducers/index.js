import { combineReducers } from 'redux';
import colours from './colourReducer';
import tones from './toneReducer';
import typography from './typographyReducer';
import typefaces from './typefaceReducer';

const rootReducer = combineReducers({
  colours,
  tones,
  typography,
  typefaces,
});

export default rootReducer;
