import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import HeaderWrapper from './components/HeaderWrapper';
import './index.less';

const antdConfig = {};

const App = () => {

  return (
    <ConfigProvider {...antdConfig}>
      <Layout>
        <HeaderWrapper />
      </Layout>
    </ConfigProvider>
  );

}

export default App;