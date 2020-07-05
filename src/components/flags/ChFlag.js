import React from 'react';
import { SWISS } from '../../constants';

/**
 * It renders the Swiss SVG flag
 * @param {string} className - Classnames to be applied at the svg root markup
 */
const BrFlag = ({ className }) => (
  <svg
    data-testid={`${SWISS}-flag`}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <rect fill="#D80027" width="512" height="512" />
    <polygon
      fill="#F0F0F0"
      points="395.13,209.624 302.377,209.624 302.377,116.87 209.623,116.87 209.623,209.624   116.87,209.624 116.87,302.377 209.623,302.377 209.623,395.13 302.377,395.13 302.377,302.377 395.13,302.377 "
    />
  </svg>
);

export default BrFlag;
