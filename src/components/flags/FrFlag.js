import React from 'react';
import { FRENCH } from '../../constants';

/**
 * It renders the French SVG flag
 * @param {string} className - Classnames to be applied at the svg root markup
 */
const FrFlag = ({ className }) => (
  <svg
    data-testid={`${FRENCH}-flag`}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <rect fill="#F0F0F0" width="512" height="512" />
    <rect fill="#0052B4" width="170.663" height="512" />
    <rect x="341.337" fill="#D80027" width="170.663" height="512" />
  </svg>
);

export default FrFlag;
