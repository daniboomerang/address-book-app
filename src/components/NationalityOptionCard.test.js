import React from 'react';
import { mount } from 'enzyme';
import NationalityOptionCard from './NationalityOptionCard';
import { SWISS, SPANISH, BRITISH, FRENCH } from '../constants';

describe('NationalityOptionCard component', () => {
  let wrapper;

  const actionProps = {
    addNationality: jest.fn(),
    removeNationality: jest.fn(),
  };

  describe('on SWISS nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(
        <NationalityOptionCard nationality={SWISS} isSelected={false} {...actionProps} />
      );

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);
      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');
      expect(actionProps.addNationality).toHaveBeenCalledWith(SWISS);

      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected {...actionProps} />);

      expect(wrapper.find(`button[data-testid="nationality-${SWISS}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SWISS}"]`).simulate('click');
      expect(actionProps.removeNationality).toHaveBeenCalledWith(SWISS);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on BRITISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(
        <NationalityOptionCard nationality={BRITISH} isSelected={false} {...actionProps} />
      );

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');
      expect(actionProps.addNationality).toHaveBeenCalledWith(BRITISH);

      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected {...actionProps} />);

      expect(wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${BRITISH}"]`).simulate('click');
      expect(actionProps.removeNationality).toHaveBeenCalledWith(BRITISH);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on FRENCH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(
        <NationalityOptionCard nationality={FRENCH} isSelected={false} {...actionProps} />
      );

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');
      expect(actionProps.addNationality).toHaveBeenCalledWith(FRENCH);

      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected {...actionProps} />);

      expect(wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${FRENCH}"]`).simulate('click');
      expect(actionProps.removeNationality).toHaveBeenCalledWith(FRENCH);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('on SPANISH nationality option card', () => {
    it('should correctly render and call add nationality action on click', () => {
      wrapper = mount(
        <NationalityOptionCard nationality={SPANISH} isSelected={false} {...actionProps} />
      );

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');
      expect(actionProps.addNationality).toHaveBeenCalledWith(SPANISH);

      expect(wrapper).toMatchSnapshot();
    });

    it('should correctly render when selected and call remove nationallity action on click', () => {
      wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected {...actionProps} />);

      expect(wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
      expect(wrapper.find('.border-blue-500').length).toBe(0);
      expect(wrapper.find('.text-red-600').length).toBe(1);
      expect(wrapper.find('.border-red-600').length).toBe(1);

      wrapper.find(`button[data-testid="nationality-${SPANISH}"]`).simulate('click');
      expect(actionProps.removeNationality).toHaveBeenCalledWith(SPANISH);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
