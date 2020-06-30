import React from 'react';
import { mount } from 'enzyme';
import NationalityOptionsGrid from './NationalityOptionsGrid';
import { SWISS, SPANISH, BRITISH, FRENCH } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';

describe('NationalityOptionsGrid component', () => {
  it('should correctly render all nationality option cards', () => {
    const wrapper = mount(<NationalityOptionsGrid />);

    expect(wrapper.find('NationalityOptionCard').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
