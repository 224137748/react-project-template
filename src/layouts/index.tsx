import React from 'react';
import Content from './Content';
import Sider from './Sider';
import Header from './Header';
import './style.less';

const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="app__container">
        <Sider/>
        <Content/>
      </div>
    </React.Fragment>
  );
};

export default Home;