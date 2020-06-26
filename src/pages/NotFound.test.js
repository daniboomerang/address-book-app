import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('Not found page component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <NotFound />
      </MemoryRouter>
    );

    expect(wrapper.text()).toContain('Sorry, the page you are looking for could not be found.');
    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
