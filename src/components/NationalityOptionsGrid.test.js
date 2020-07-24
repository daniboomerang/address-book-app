import React from 'react';
import { mount } from 'enzyme';
import { useSelector } from 'react-redux';
import NationalityOptionsGrid from './NationalityOptionsGrid';
import { NATIONALITIES } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';
import { initialState as usersFetchInitialState } from '../store/reducers/usersFetch';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../components/NationalityOptionCard', () => () => {
  return <div data-testid="nationality-option-card" />;
});

describe('NationalityOptionsGrid component', () => {
  afterEach(() => {
    useSelector.mockClear();
  });

  it('should correctly render the grid when nationalities filter applied', () => {
    useSelector.mockImplementation((callback) => callback({ usersFetch: usersFetchInitialState }));
    const wrapper = mount(<NationalityOptionsGrid />);

    expect(wrapper.find('div[data-testid="options-grid-message"]').text()).toBe(
      'Filter your users by nationalies.'
    );
    expect(wrapper.find('div[data-testid="nationality-option-card"]').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the grid when no nationalities filter applied', () => {
    useSelector.mockImplementation((callback) =>
      callback({ usersFetch: { ...usersFetchInitialState, nationalitiesFilter: [] } })
    );
    const wrapper = mount(<NationalityOptionsGrid />);

    expect(wrapper.find('div[data-testid="options-grid-message"]').text()).toBe(
      'Filter your users by nationalies.If no nationalities are selected no filter will be applied'
    );
    expect(wrapper.find('div[data-testid="nationality-option-card"]').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
