import React from 'react';
import { NATIONALITIES } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';

/**
 * It renders a grid with the different nationality option cards
 * @param {Props} props
 * @param {Array} props.selectedNationalities - The currently filtered nationalities
 * @param {Object} props.actions - Redux actions for adding/removing nationalities from filter
 */
const NationalityOptionsGrid = ({ selectedNationalities, actions }) => (
  <div className="px-6 max-w-md m-auto">
    <div data-testid="options-grid-message" className="h-20 my-6 text-center">
      Filter your users by nationalies.
      {selectedNationalities.length === 0 && (
        <div className="text-sm">If no nationalities are selected no filter will be applied</div>
      )}
    </div>

    <div
      className="grid grid-cols-2 justify-between items-center m-auto col-gap-4 row-gap-12"
      style={{ justifyItems: 'center' }}
    >
      {NATIONALITIES.map((nationality) => (
        <NationalityOptionCard
          key={nationality}
          nationality={nationality}
          isSelected={selectedNationalities.includes(nationality)}
          {...actions}
        />
      ))}
    </div>
  </div>
);

export default NationalityOptionsGrid;
