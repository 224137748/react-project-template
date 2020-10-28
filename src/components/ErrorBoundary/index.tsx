import React from 'react';
import { Button } from 'antd';
import styles from './ErrorBoundary.module.less';
import { ReactComponent as Empty} from 'assets/images/empty.svg';

interface ErrorBoundaryProps {
  height?: number | string;
}

interface ErrorBoundaryState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  state:ErrorBoundaryState = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo} = this.state;
    const { children, height} = this.props;
    return errorInfo ? (
      <div className={styles.error} style={{ height }}>
        <Empty className={styles['error__img']} />
        <h2 className={styles['error__title']}>页面展现失败</h2>
        <details>
          <summary>错误详情：</summary>
          <pre>
            <code>{error && error.toString()}</code>
            <code>{`${errorInfo.componentStack}`.replace(/[\t\v]+/g, '')}</code>
          </pre>
        </details>
        <Button type="primary" onClick={() => window.location.reload()} style={{ marginTop: 10 }}>
          刷新页面
        </Button>
      </div>
    ) : (children);
  }
}

export default ErrorBoundary;