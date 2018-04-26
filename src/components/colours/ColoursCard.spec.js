import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ColoursCard from './ColoursCard';

describe('<ColoursCard />', () => {
  it("should have a header called 'Colour'", () => {
    const wrapper = shallow(<ColoursCard />);
    const actual = wrapper.find('h2').text();
    const expected = 'Colour';

    expect(actual).toEqual(expected);
  });

  // it("should have a header with a 'testing' class", () => {
  //   const wrapper = shallow(<ColoursCard />);
  //   const actual = wrapper.find('h2').prop('className');
  //   const expected = 'testing u-margin-bottom-none';
  //
  //   expect(actual).toEqual(expected);
  // });
});
