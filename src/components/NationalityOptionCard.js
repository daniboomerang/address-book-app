import React from 'react';
import cx from 'classnames';
import { SWISS, SPANISH, BRITISH } from '../constants';

/**
 * @param {string} nationality - The different nationality options -> CH, ES, BR or FR
 * @param {boolean} isSelected - Whether the options shall be deisplayed as selected
 * @param {Function} addNationality - Action to add a new nationality to store
 * @param {Function} removeNationality - Action to remove a new nationality from store
 */
const NationalityOptionCard = ({ nationality, isSelected, addNationality, removeNationality }) => {
  const handleAddNationality = () => addNationality(nationality);
  const handleRemoveNationality = () => removeNationality(nationality);
  const svgProps = {
    className: 'h-12 w-12 sm:h-24 sm:w-24',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 512 512',
  };

  const renderFlag = () => {
    if (nationality === BRITISH) {
      return (
        <svg {...svgProps}>
          <rect fill="#F0F0F0" width="512" height="512" />
          <polygon
            fill="#D80027"
            points="0,304 208,304 208,512 304,512 304,304 512,304 512,208 304,208 304,0 208,0 208,208 0,208   "
          />
          <g>
            <polygon fill="#0052B4" points="406.92,333.913 512,438.993 512,333.913  " />
            <polygon fill="#0052B4" points="333.913,333.913 512,512 512,461.64 384.273,333.913  " />
            <polygon fill="#0052B4" points="464.564,512 333.913,381.336 333.913,512  " />
          </g>
          <polygon fill="#F0F0F0" points="333.913,333.913 512,512 512,461.64 384.273,333.913 " />
          <polygon fill="#D80027" points="333.913,333.913 512,512 512,461.64 384.273,333.913 " />
          <g>
            <polygon fill="#0052B4" points="80.302,333.913 0,414.215 0,333.913  " />
            <polygon fill="#0052B4" points="178.084,356.559 178.084,511.997 22.658,511.997  " />
          </g>
          <polygon fill="#D80027" points="127.724,333.916 0,461.641 0,512 0,512 178.084,333.916 " />
          <g>
            <polygon fill="#0052B4" points="105.08,178.087 0,73.007 0,178.087  " />
            <polygon fill="#0052B4" points="178.087,178.087 0,0 0,50.36 127.727,178.087  " />
            <polygon fill="#0052B4" points="47.436,0 178.087,130.663 178.087,0  " />
          </g>
          <polygon fill="#F0F0F0" points="178.087,178.087 0,0 0,50.36 127.727,178.087 " />
          <polygon fill="#D80027" points="178.087,178.087 0,0 0,50.36 127.727,178.087 " />
          <g>
            <polygon fill="#0052B4" points="431.698,178.087 512,97.785 512,178.087  " />
            <polygon fill="#0052B4" points="333.916,155.441 333.916,0.003 489.342,0.003  " />
          </g>
          <polygon
            fill="#D80027"
            points="384.276,178.084 512,50.359 512,0 512,0 333.916,178.084 "
          />
        </svg>
      );
    }
    if (nationality === SWISS) {
      return (
        <svg {...svgProps}>
          <rect fill="#D80027" width="512" height="512" />
          <polygon
            fill="#F0F0F0"
            points="395.13,209.624 302.377,209.624 302.377,116.87 209.623,116.87 209.623,209.624   116.87,209.624 116.87,302.377 209.623,302.377 209.623,395.13 302.377,395.13 302.377,302.377 395.13,302.377 "
          />
        </svg>
      );
    }
    if (nationality === SPANISH) {
      return (
        <svg {...svgProps}>
          <rect fill="#FFDA44" width="512" height="512" />
          <g>
            <rect fill="#D80027" width="512" height="170.663" />
            <rect y="341.337" fill="#D80027" width="512" height="170.663" />
          </g>
        </svg>
      );
    }

    return (
      <svg {...svgProps}>
        <rect fill="#F0F0F0" width="512" height="512" />
        <rect fill="#0052B4" width="170.663" height="512" />
        <rect x="341.337" fill="#D80027" width="170.663" height="512" />
      </svg>
    );
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
