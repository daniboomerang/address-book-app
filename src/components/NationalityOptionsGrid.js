import React, { useState } from 'react';
import { SWISS, SPANISH, BRITISH, FRENCH } from '../constants';
import NationalityOptionCard from './NationalityOptionCard';

/**
 * It renders a grid with the different nationality option cards
 */
const NationalityOptionsGrid = () => {
  const [selectedNationalities] = useState([SWISS, SPANISH, FRENCH]);

  return (
    <div className="p-4 max-w-md m-auto">
      <div className="my-12 sm:my-20 text-center">
        Select the nationalities you would like to filter
        <br />
        <div className="text-sm">{`(${selectedNationalities.toString()})`}</div>
      </div>

      <div
        className="grid grid-cols-2 justify-between items-center m-auto col-gap-4 row-gap-12"
        style={{ justifyItems: 'center' }}
      >
        <NationalityOptionCard
          nationality={SWISS}
          isSelected={selectedNationalities.includes(SWISS)}
        />
        <NationalityOptionCard
          nationality={SPANISH}
          isSelected={selectedNationalities.includes(SPANISH)}
        />
        <NationalityOptionCard
          nationality={BRITISH}
          isSelected={selectedNationalities.includes(BRITISH)}
        />
        <NationalityOptionCard
          nationality={FRENCH}
          isSelected={selectedNationalities.includes(FRENCH)}
        />
      </div>
    </div>
  );
};

export default NationalityOptionsGrid;
