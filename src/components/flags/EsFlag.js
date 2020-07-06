import React from 'react';
import { SPANISH } from '../../constants';

/**
 * It renders the Spanish SVG flag
 * @param {Props} props
 * @param {string} props.className - Classnames to be applied at the svg root markup
 */
const EsFlag = ({ className }) => (
  <svg
    data-testid={`${SPANISH}-flag`}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <rect fill="#FFDA44" width="512" height="512" />
    <g>
      <rect fill="#D80027" width="512" height="170.663" />
      <rect y="341.337" fill="#D80027" width="512" height="170.663" />
    </g>
  </svg>
);

export default EsFlag;
