import React from 'react';
import cx from 'classnames';
import styles from './Spinner.module.css';

/**
 * It renders an animated loading spinner.
 */
const Spinner = () => (
  <div className={cx(styles.spinner, 'border-t-4 border-red-600 rounded-full w-10 h-10')} />
);

export default Spinner;
