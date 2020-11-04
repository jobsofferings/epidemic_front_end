import React from 'react';
import { ConfigProvider } from 'antd';
import EpidemicIcon from './util/EpidemicIcon';

const antdConfig = {} ;

const App = () => {

  return (
    <ConfigProvider {...antdConfig}>
      <EpidemicIcon type='icon-add' />
    </ConfigProvider>
  );
  
}

export default App;