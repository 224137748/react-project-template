import React from 'react';
import styles from './Spinner.module.less';

export interface SpinnerProps {
  width?: number;
  height?: number
}

const Spinner: React.FC<SpinnerProps> = ({ width = 45, height = 45}) => {
  return (
    <svg
      className={styles.spinner}
      width={width}
      height={height}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
};

export default Spinner;