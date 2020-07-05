import React from 'react';
import { mount } from 'enzyme';
import { usersMockedData } from '../__mocks__/mocked-data';
import UsersList from './UsersList';

jest.mock('./UserPreview', () => () => {
  return <div data-testid="user-preview" />;
});

jest.mock('./UserDetailsModal', () => () => {
  return <div data-testid="user-details" />;
});

describe('UsersList component', () => {
  it('should render correctly the list of users', () => {
    const wrapper = mount(<UsersList users={usersMockedData} />);

    expect(wrapper.find(`div[data-testid="user-preview-wrapper"]`).length).toBe(
      usersMockedData.length
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the user modal details when clicking on the user preview card2', () => {
    const wrapper = mount(<UsersList users={usersMockedData} />);

    expect(wrapper.find(`div[data-testid="user-details"]`).length).toBe(0);
    wrapper.find(`div[data-testid="user-preview-wrapper"]`).at(0).simulate('click');

    // Now the user details modal should be displayed
    expect(wrapper.find(`div[data-testid="user-details"]`).length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
