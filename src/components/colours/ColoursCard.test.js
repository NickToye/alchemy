import React from 'react';
import { mount } from 'enzyme';
import { ColoursCard } from './ColoursCard';

describe('<ColoursCard />', () => {
  it('fizz', () => {
    const wrapper = mount(<ColoursCard colours={[]} />);
    const actual = wrapper.find('h1').text();
    const expected = 'Colours';

    expect(actual).toEqual(expected);
  });
});
