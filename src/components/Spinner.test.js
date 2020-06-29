import React from 'react';
import { mount } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Spinner />);

    expect(wrapper.find('.spinner').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
