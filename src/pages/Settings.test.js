import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Settings } from './Settings';

jest.mock('../components/NationalityOptionsGrid', () => () => {
  return <div data-testid="nationalities-grid" />;
});

describe('Settings component', () => {
  it('should correctly render the settings page', () => {
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Settings />
      </MemoryRouter>
    );

    expect(wrapper.find('FontAwesomeIcon').length).toBe(1);
    expect(wrapper.find('div[data-testid="nationalities-grid"]').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });
});
