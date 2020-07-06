import React from 'react';
import cx from 'classnames';
import { SWISS, SPANISH, BRITISH } from '../constants';
import { BrFlag, ChFlag, EsFlag, FrFlag } from './flags';

/**
 * @param {Props} props
 * @param {string} props.nationality - The different nationality options -> CH, ES, BR or FR
 * @param {boolean} props.isSelected - Whether the options shall be deisplayed as selected
 * @param {Function} props.addNationality - Action to add a new nationality to the store
 * @param {Function} props.removeNationality - Action to remove a nationality from the store
 */
const NationalityOptionCard = ({ nationality, isSelected, addNationality, removeNationality }) => {
  const handleAddNationality = () => addNationality(nationality);
  const handleRemoveNationality = () => removeNationality(nationality);

  const renderFlag = () => {
    if (nationality === BRITISH) {
      return <BrFlag className="h-12 w-12 sm:h-24 sm:w-24" />;
    }
    if (nationality === SWISS) {
      return <ChFlag className="h-12 w-12 sm:h-24 sm:w-24" />;
    }
    if (nationality === SPANISH) {
      return <EsFlag className="h-12 w-12 sm:h-24 sm:w-24" />;
    }
    return <FrFlag className="h-12 w-12 sm:h-24 sm:w-24" />;
  };

  return (
    <button
      type="button"
      data-testid={`nationality-${nationality}`}
      onClick={isSelected ? handleRemoveNationality : handleAddNationality}
      className={cx(
        'focus:outline-none grid border-4 text-center justify-center transform cursor-pointer duration-200 hover:border-red-600 hover:text-red-600 pt-4 pb-2 md:pt-5 md:pb-3 w-24 sm:w-32',
        {
          'border-red-600 text-red-600 rounded-md scale-110 hover:border-blue-500 hover:text-blue-500': isSelected,
          'hover:rounded-md border-blue-500': !isSelected,
        }
      )}
    >
      {renderFlag()}
      <span className="mt-4">{nationality}</span>
    </button>
  );
};

export default NationalityOptionCard;
