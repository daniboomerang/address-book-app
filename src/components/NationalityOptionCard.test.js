import React from 'react';
import { mount } from 'enzyme';
import NationalityOptionCard from './NationalityOptionCard';
import { SWISS, SPANISH, BRITISH, FRENCH } from '../constants';

describe('NationalityOptionCard component', () => {
  let wrapper;

  it('should correctly render the SWISS nationality option card', () => {
    wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected={false} />);

    expect(wrapper.find(`div[data-testid="nationality-${SWISS}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the SWISS nationality option card when selected', () => {
    wrapper = mount(<NationalityOptionCard nationality={SWISS} isSelected />);

    expect(wrapper.find(`div[data-testid="nationality-${SWISS}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(0);
    expect(wrapper.find('.text-red-600').length).toBe(1);
    expect(wrapper.find('.border-red-600').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the BRITISH nationality option card', () => {
    wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected={false} />);

    expect(wrapper.find(`div[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the BRITISH nationality option card when selected', () => {
    wrapper = mount(<NationalityOptionCard nationality={BRITISH} isSelected />);

    expect(wrapper.find(`div[data-testid="nationality-${BRITISH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(0);
    expect(wrapper.find('.text-red-600').length).toBe(1);
    expect(wrapper.find('.border-red-600').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the FRENCH nationality option card', () => {
    wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected={false} />);

    expect(wrapper.find(`div[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the FRENCH nationality option card when selected', () => {
    wrapper = mount(<NationalityOptionCard nationality={FRENCH} isSelected />);

    expect(wrapper.find(`div[data-testid="nationality-${FRENCH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(0);
    expect(wrapper.find('.text-red-600').length).toBe(1);
    expect(wrapper.find('.border-red-600').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the SPANISH nationality option card', () => {
    wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected={false} />);

    expect(wrapper.find(`div[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the SPANISH nationality option card when selected', () => {
    wrapper = mount(<NationalityOptionCard nationality={SPANISH} isSelected />);

    expect(wrapper.find(`div[data-testid="nationality-${SPANISH}"]`).length).toBe(1);
    expect(wrapper.find('.border-blue-500').length).toBe(0);
    expect(wrapper.find('.text-red-600').length).toBe(1);
    expect(wrapper.find('.border-red-600').length).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });
});
