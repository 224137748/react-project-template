import React from 'react';
import Spinner from './Spinner';
import styles from './FallbackLoader.module.less';

interface FallbackLoaderProps {
  height?: number | string;
  title?: string;
}

const FallbackLoader: React.FC<FallbackLoaderProps> = ({ height, title = '页面加载中...' }) => {
  return (
    <div className={styles.loader} style={{ height }}>
      <Spinner/>
  <p className="{styles.tips}">{ title }</p>
    </div>
  );
};

export default FallbackLoader;