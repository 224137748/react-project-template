import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NotFoundIcon } from 'assets/images/not-found.svg';
import styles from './NotFound.module.less';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <NotFoundIcon className={styles['not-found-icon']} />
      <div className={styles['not-found-detail']}>
        <h1>抱歉！页面无法访问.....</h1>
        <dl>
          <dt>可能因为：</dt>
          <dd>
            <span>网址有错误&gt;</span>
            <span>请检查地址是否完整或存在多余字符</span>
          </dd>
          <dd>
            <span>网址已失效&gt;</span>
            <span>可能页面已删除</span>
          </dd>
          <dd>
            <Link to="/app">&lt; 返回首页</Link>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default NotFound;
