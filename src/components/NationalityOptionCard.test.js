import React from 'react';
import { mount } from 'enzyme';
import { useDispatch } from 'react-redux';
import NationalityOptionCard from './NationalityOptionCard';
import { SWISS, SPANISH, BRITISH, FRENCH, ADD_NATIONALITY, REMOVE_NATIONALITY } from '../constants';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('NationalityOptionCard component', () => {
  const mockedDispatch = jest.fn();
  let wrapper;

  describe('on SWISS nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: SWISS, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: SWISS, type: REMOVE_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on BRITISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: BRITISH, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: BRITISH, type: REMOVE_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on FRENCH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');
      expect(mockDispatch).toHaveBeenCalledWith({ nationality: FRENCH, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: FRENCH, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on SPANISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected={false} />);

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: SPANISH, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected />);

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');

      expect(mockDispatch).toHaveBeenCalledWith({ nationality: SPANISH, type: ADD_NATIONALITY });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
