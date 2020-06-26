import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

describe('Home page component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Home />);

    expect(wrapper.text()).toBe('Address book home page');
    expect(wrapper).toMatchSnapshot();
  });
});
