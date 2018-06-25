import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const typography = [
  {
    id: 'type1',
    element: 'h1',
    fontSize: 36,
    label: 'Heading 1',
    typeface: 'FS Emeric Light',
  },
  {
    id: 'type2',
    element: 'h2',
    fontSize: 28,
    label: 'Heading 2',
    typeface: 'FS Emeric Light',
  },
  {
    id: 'type3',
    element: 'h3',
    fontSize: 24,
    label: 'Heading 3',
    typeface: 'FS Emeric Light',
  },
  {
    id: 'type4',
    element: 'p',
    fontSize: 16,
    label: 'Paragraph',
    typeface: 'FS Emeric Regular',
  },
  {
    id: 'type5',
    element: 'small',
    fontSize: 13,
    label: 'Small',
    typeface: 'FS Emeric Regular',
  },
];

const typefaces = [
  {
    id: 'face1',
    faceName: 'FS Emeric Light',
    faceClass: 'light',
  },
  {
    id: 'face2',
    faceName: 'FS Emeric Book',
    faceClass: 'book',
  },
  {
    id: 'face3',
    faceName: 'FS Emeric Medium',
    faceClass: 'medium',
  },
  {
    id: 'face4',
    faceName: 'FS Emeric Regular',
    faceClass: 'regular',
  },
  {
    id: 'face5',
    faceName: 'FS Emeric Core',
    faceClass: 'core',
  },
  {
    id: 'face6',
    faceName: 'FS Emeric Thin',
    faceClass: 'thin',
  },
  {
    id: 'face7',
    faceName: 'FS Emeric Bold',
    faceClass: 'bold',
  },
];

class TypographyApi {
  static getAllTypography() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], typography));
      }, delay);
    });
  }
  static getAllTypefaces() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], typefaces));
      }, delay);
    });
  }
}

export default TypographyApi;
