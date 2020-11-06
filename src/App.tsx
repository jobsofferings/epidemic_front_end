import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import SiderWrapper from './components/SiderWrapper';
import HeaderWrapper from './components/HeaderWrapper';
import ContentWrapper from './components/ContentWrapper';
import './index.less';
import './reset.less';

const wrapperArea = { display: 'flex', flex: '0 0 92px', transition: 'all 0.2s' };

const App = () => {

  return (
    <ConfigProvider>
      <Layout>
        <HeaderWrapper />
        <Layout>
          <div style={wrapperArea}>
            <SiderWrapper />
          </div>
          < ContentWrapper />
        </Layout>
      </Layout>
    </ConfigProvider>
  );

}

export default App;