import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Result, Button } from 'antd';

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const expired = false;
  if (expired) {
    return (
      <Result
        title="您的登录信息已失效，请重新登录"
        status="403"
        style={{ paddingTop: 150 }}
        extra={
          <Button
            type="primary"
            size="large"
            style={{ width: 200 }}
            href="/login"
            target="_blank"
            danger
          >
            去登录
          </Button>
        }
      />
    );
  }
  return <Route {...rest}>{children}</Route>;
};

export default AuthRoute;