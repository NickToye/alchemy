import expect from 'expect';
import * as colourActions from './colourActions';
import * as types from './actionTypes';

describe('Colour Actions', () => {
  describe('loadColourSuccess', () => {
    it('should create a loadColoursSuccess action', () => {
      // arrange
      const colours = { id: 'colour1', title: 'Primary' };
      const expectedAction = {
        type: types.LOAD_COLOURS_SUCCESS,
        colours: colours,
      };

      // act
      const action = colourActions.loadColoursSuccess(colours);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
  describe('loadTonesSuccess', () => {
    it('should create a loadTonesSuccess action', () => {
      // arrange
      const tones = { id: 'tone1', title: 'Shade-20' };
      const expectedAction = {
        type: types.LOAD_TONES_SUCCESS,
        tones: tones,
      };

      // act
      const action = colourActions.loadTonesSuccess(tones);

      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
