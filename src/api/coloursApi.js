import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
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

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = colour => {
//   return replaceAll(colour.title, ' ', '-');
// };

class ColourApi {
  static getAllColours() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], colours));
      }, delay);
    });
  }

  // static saveCourse(course) {
  //   course = Object.assign({}, course); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }
  //
  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }
  //
  //       resolve(course);
  //     }, delay);
  //   });
  // }
  //
  // static deleteCourse(courseId) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.id == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default ColourApi;
