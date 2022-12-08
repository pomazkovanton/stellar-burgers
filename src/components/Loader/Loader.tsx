import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import styles from './loader.module.css';

const Loader: React.DC = () => {
  return (
    <ThreeDots
      height='120'
      width='120'
      radius='12'
      color='#4C4CFF'
      ariaLabel='three-dots-loading'
      wrapperClass={styles.container}
      visible={true}
    />
  );
};

export default Loader;
