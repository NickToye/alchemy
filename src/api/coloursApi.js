import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const tones = [
  {
    id: 'tone1',
    title: 'tint-10',
  },
  {
    id: 'tone2',
    title: 'tint-20',
  },
  {
    id: 'tone3',
    title: 'tint-30',
  },
  {
    id: 'tone4',
    title: 'tint-40',
  },
  {
    id: 'tone5',
    title: 'tint-50',
  },
  {
    id: 'tone6',
    title: 'shade-10',
  },
  {
    id: 'tone7',
    title: 'shade-20',
  },
  {
    id: 'tone8',
    title: 'shade-30',
  },
  {
    id: 'tone9',
    title: 'shade-40',
  },
  {
    id: 'tone10',
    title: 'shade-50',
  },
];

const colours = [
  {
    id: 'colour1',
    title: 'Primary',
    type: 'brand',
  },
  {
    id: 'colour2',
    title: 'Secondary1',
    type: 'brand',
  },
  {
    id: 'colour3',
    title: 'Secondary2',
    type: 'brand',
  },
  {
    id: 'colour4',
    title: 'Secondary3',
    type: 'brand',
  },
  {
    id: 'colour5',
    title: 'Black',
    type: 'neutral',
  },
  {
    id: 'colour6',
    title: 'White',
    type: 'neutral',
  },
  {
    id: 'colour7',
    title: 'Pale Grey',
    type: 'neutral',
  },
  {
    id: 'colour8',
    title: 'Light Grey',
    type: 'neutral',
  },
  {
    id: 'colour9',
    title: 'Grey',
    type: 'neutral',
  },
  {
    id: 'colour10',
    title: 'Medium Grey',
    type: 'neutral',
  },
  {
    id: 'colour11',
    title: 'Dark Grey',
    type: 'neutral',
  },
  {
    id: 'colour12',
    title: 'Positive',
    type: 'utility',
  },
  {
    id: 'colour13',
    title: 'Caution',
    type: 'utility',
  },
  {
    id: 'colour14',
    title: 'Negative',
    type: 'utility',
  },
  {
    id: 'colour15',
    title: 'Info',
    type: 'utility',
  },
];

class ColourApi {
  static getAllColours() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], colours));
      }, delay);
    });
  }
  static getAllTones() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], tones));
      }, delay);
    });
  }
}

export default ColourApi;
