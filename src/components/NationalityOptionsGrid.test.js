import React from 'react';
import { mount } from 'enzyme';
import NationalityOptionsGrid from './NationalityOptionsGrid';
import { NATIONALITIES } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';

describe('NationalityOptionsGrid component', () => {
  it('should correctly render the grid when nationalities filter applied', () => {
    const wrapper = mount(<NationalityOptionsGrid selectedNationalities={NATIONALITIES} />);

    expect(wrapper.find('div[data-testid="options-grid-message"]').text()).toBe(
      'Filter your users by nationalies.'
    );
    expect(wrapper.find('NationalityOptionCard').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });

  it('should correctly render the grid when no nationalities filter applied', () => {
    const wrapper = mount(<NationalityOptionsGrid selectedNationalities={[]} />);

    expect(wrapper.find('div[data-testid="options-grid-message"]').text()).toBe(
      'Filter your users by nationalies.If no nationalities are selected no filter will be applied'
    );
    expect(wrapper.find('NationalityOptionCard').length).toBe(4);
    expect(wrapper).toMatchSnapshot();
  });
});
