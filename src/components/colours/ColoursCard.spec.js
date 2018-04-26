import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import ColoursCard from './ColoursCard';

describe('<ColoursCard />', () => {
  it("should have a header called 'Colours'", () => {
    const wrapper = shallow(<ColoursCard />);
    const actual = wrapper.find('h1').text();
    const expected = 'Colours';

    expect(actual).toEqual(expected);
  });

  it("should have a header with a 'testing' class", () => {
    const wrapper = shallow(<ColoursCard />);
    const actual = wrapper.find('h1').prop('className');
    const expected = 'testing u-margin-bottom-none';

    expect(actual).toEqual(expected);
  });
});
