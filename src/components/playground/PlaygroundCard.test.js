import React from 'react';
import { shallow } from 'enzyme';
import PlaygroundCard from './PlaygroundCard';

describe('<PlaygroundCard />', () => {
  it('should have a header with text', () => {
    const wrapper = shallow(<PlaygroundCard />);
    const actual = wrapper.find('h2').text();
    const expected = 'Playground';

    expect(actual).toEqual(expected);
  });
});
