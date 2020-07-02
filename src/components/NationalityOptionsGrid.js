import React from 'react';
import { NATIONALITIES } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';

/**
 * It renders a grid with the different nationality option cards
 */
const NationalityOptionsGrid = ({ selectedNationalities, actions }) => (
  <div className="p-4 max-w-md m-auto">
    <div
      data-testid="options-grid-message"
      className="h-24 sm:h-12 my-6 sm:my-12 sm:my-20 text-center"
    >
      Filter your users by nationalies.
      {selectedNationalities.length === 0 && (
        <>
          <br />
          <div className="text-sm">If no nationalities are selected no filter will be applied</div>
        </>
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
