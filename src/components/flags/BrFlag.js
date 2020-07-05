import React from 'react';
import { BRITISH } from '../../constants';

/**
 * It renders the Brithish SVG flag
 * @param {string} className - Classnames to be applied at the svg root markup
 */
const BrFlag = ({ className }) => (
  <svg
    data-testid={`${BRITISH}-flag`}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
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
    <polygon fill="#D80027" points="384.276,178.084 512,50.359 512,0 512,0 333.916,178.084 " />
  </svg>
);

export default BrFlag;
