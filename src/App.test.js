import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('should render App component', () => {
  const wrapper = mount(<App />);

  expect(wrapper.text()).toBe('Address book app');
});
