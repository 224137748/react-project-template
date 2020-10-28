import React from 'react';
import { AntDesignOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Popover, Typography, Divider, Menu } from 'antd';

import avatar from 'assets/images/avatar.png';

const UserInfo = () => (
  <div className="userinfo">
    <Typography.Title level={4}>杨发财阿姨</Typography.Title>
    <Divider/>
    <Menu selectedKeys={[]}>
      <Menu.Item key="person" >
        个人中心
      </Menu.Item>
      <Menu.Item key="quit" >
        退出登录
      </Menu.Item>
    </Menu>
  </div>
);

const Header = () => {
  return (
    <div className="app__header">
      <a href="/" title="鲁大师PRO管理后台" className="app__header__title" rel="noopener noreferrer">
        <AntDesignOutlined style={{fontSize: '32px'}}/>
        <h3>鲁大师PRO管理后台</h3>
      </a>

      <Popover className="userbar" content={UserInfo} >
        <div>
          <img src={avatar} alt="avatar"/>
          <div className="username">杨发财阿姨</div>
          <CaretDownOutlined/>
        </div>
      </Popover>
    </div>
  );
};

export default Header;