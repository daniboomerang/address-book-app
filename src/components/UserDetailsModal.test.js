import React from 'react';
import { mount } from 'enzyme';
import { usersMockedData } from '../__mocks__/mocked-data';
import UserDetailsModal from './UserDetailsModal';

describe('UserDetailsModal component', () => {
  const user = usersMockedData[0];
  const {
    name: { first: firstName, last: lastName },
    login: { username },
    email,
    picture: { large },
    location: {
      street: { name: streetName, number: streetNumber },
      city,
      state,
      postcode,
    },
    phone,
    cell,
  } = user;

  const onClose = jest.fn();

  it('should render correctly when the modal is open', () => {
    const wrapper = mount(<UserDetailsModal isOpen user={user} onClose={onClose} />);

    expect(wrapper.find(`div[data-testid="user-details"]`).length).toBe(1);
    expect(wrapper.find(`span[data-testid="${firstName}"]`).text()).toBe(firstName);
    expect(wrapper.find(`span[data-testid="${lastName}"]`).text()).toBe(lastName);
    expect(wrapper.find(`p[data-testid="${username}"]`).text()).toBe(username);
    expect(wrapper.find(`p[data-testid="${email}"]`).text()).toBe(email);
    expect(wrapper.find(`img[src="${large}"]`).length).toBe(1);
    expect(wrapper.find(`div[data-testid="address"]`).text()).toBe(
      `${streetNumber} ${streetName},PC: ${postcode}, ${city} ${state}`
    );
    expect(wrapper.find(`div[data-testid="phone-number"]`).text()).toBe(phone);
    expect(wrapper.find(`div[data-testid="cell-number"]`).text()).toBe(cell);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when the modal is closed', () => {
    const wrapper = mount(<UserDetailsModal isOpen={false} user={user} onClose={onClose} />);

    expect(wrapper.find(`div[data-testid="user-details"]`).length).toBe(0);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call on close when the X is clicked', () => {
    const wrapper = mount(<UserDetailsModal isOpen user={user} onClose={onClose} />);

    const theX = wrapper.find(`FontAwesomeIcon[data-testid="close-modal"]`);
    expect(theX.length).toBe(1);
    theX.simulate('click');

    expect(onClose).toHaveBeenCalled();
  });
});
