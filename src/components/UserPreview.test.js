import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { usersMockedData } from '../__mocks__/mocked-data';
import UserPreview from './UserPreview';

describe('UserPreview component', () => {
  const user = usersMockedData[0];
  const {
    name: { first: firstName, last: lastName },
    login: { username },
    email,
    picture: { large },
  } = user;

  it('should render correctly', () => {
    const wrapper = mount(<UserPreview user={user} />);

    expect(wrapper.find(`div[data-testid="user-${email}"]`).length).toBe(1);
    expect(wrapper.find(`span[data-testid="${firstName}"]`).text()).toBe(firstName);
    expect(wrapper.find(`span[data-testid="${lastName}"]`).text()).toBe(lastName);
    expect(wrapper.find(`img[src="${large}"]`).length).toBe(1);
    expect(wrapper.find(`div[data-testid="${username}"]`).text()).toBe(username);
    expect(wrapper.find(`div[data-testid="${email}"]`).text()).toBe(email);

    expect(wrapper).toMatchSnapshot();
  });

  it('should transition from blue to red color on hover', () => {
    const wrapper = mount(<UserPreview user={user} />);

    // 1. Find user container
    let userContainer = wrapper.find(`div[data-testid="user-${email}"]`);
    expect(userContainer).toHaveLength(1);

    // 2. Check the border and text are blue
    expect(userContainer.find('.border-blue-500').length).toBeGreaterThan(1);
    expect(userContainer.find('.text-red-600').length).toBe(0);
    expect(userContainer.find('.border-red-600').length).toBe(0);

    // 3. Hover it
    act(() => {
      wrapper.update();
      userContainer.prop('onMouseEnter')({
        currentTarget: {},
      });
    });

    act(() => {
      wrapper.update();
    });

    userContainer = wrapper.find(`div[data-testid="user-${email}"]`);
    expect(userContainer).toHaveLength(1);

    // 4. Check the border and text are red after hovering
    expect(userContainer.find('.border-blue-500').length).toBe(0);
    expect(userContainer.find('.text-red-600').length).toBe(1);
    expect(userContainer.find('.border-red-600').length).toBeGreaterThan(1);

    expect(wrapper).toMatchSnapshot();
  });
});
