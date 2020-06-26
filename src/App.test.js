import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { HomePage, NotFoundPage } from './pages';
import App from './App';

describe('App component', () => {
  it('should render 404 not found page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  it('should render home page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
