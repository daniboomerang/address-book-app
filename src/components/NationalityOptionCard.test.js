import React from 'react';
import { mount } from 'enzyme';
import { useDispatch } from 'react-redux';
import NationalityOptionCard from './NationalityOptionCard';
import {
  SWISS,
  SPANISH,
  BRITISH,
  FRENCH,
  ADD_FETCH_NATIONALITY_FILTER,
  REMOVE_FETCH_NATIONALITY_FILTER,
} from '../constants';
import {
  addFetchNationalityFilter,
  removeFetchNationalityFilter,
} from '../store/actions/usersFetch';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../store/actions/usersFetch', () => ({
  addFetchNationalityFilter: jest.fn(),
  removeFetchNationalityFilter: jest.fn(),
}));

const mockDispatch = jest.fn();

describe('NationalityOptionCard component', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => mockDispatch);
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  let wrapper;

  describe('on SWISS nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      mockDispatch.mockImplementation(() => addFetchNationalityFilter);

      wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');

      expect(addFetchNationalityFilter).toHaveBeenCalledWith(SWISS);

      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      mockDispatch.mockImplementation(() => removeFetchNationalityFilter);
      wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');

      expect(removeFetchNationalityFilter).toHaveBeenCalledWith(SWISS);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on BRITISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      mockDispatch.mockImplementation(() => addFetchNationalityFilter);
      wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');

      expect(addFetchNationalityFilter).toHaveBeenCalledWith(BRITISH);
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      mockDispatch.mockImplementation(() => removeFetchNationalityFilter);
      wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');

      expect(removeFetchNationalityFilter).toHaveBeenCalledWith(BRITISH);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on FRENCH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      mockDispatch.mockImplementation(() => addFetchNationalityFilter);

      wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');
      expect(addFetchNationalityFilter).toHaveBeenCalledWith(FRENCH);
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      mockDispatch.mockImplementation(() => removeFetchNationalityFilter);

      wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');

      expect(removeFetchNationalityFilter).toHaveBeenCalledWith(FRENCH);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on SPANISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      mockDispatch.mockImplementation(() => addFetchNationalityFilter);

      wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');

      expect(addFetchNationalityFilter).toHaveBeenCalledWith(SPANISH);
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      mockDispatch.mockImplementation(() => removeFetchNationalityFilter);

      wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');

      expect(removeFetchNationalityFilter).toHaveBeenCalledWith(SPANISH);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
