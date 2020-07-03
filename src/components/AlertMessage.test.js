import React from 'react';
import { mount } from 'enzyme';
import AlertMessage from './AlertMessage';

describe('AlertMessage component', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <AlertMessage>
        <div data-testid="some-children-id">Alert!</div>
      </AlertMessage>
    );

    expect(wrapper.find(`div[data-testid="alert-message"]`).length).toBe(1);
    expect(wrapper.find(`div[data-testid="some-children-id"]`).length).toBe(1);
    expect(wrapper.find(`div[data-testid="some-children-id"]`).text()).toBe('Alert!');
    expect(wrapper).toMatchSnapshot();
  });
});
