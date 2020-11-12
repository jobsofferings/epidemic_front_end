import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import EpidemicLayout from './components/EpidemicLayout';
import antdConfig from './config/antdConfig';
import { ROUTE_CONFIG } from './config/routerConfig';
import './index.less';
import './reset.less';

export interface EpidemicAppProps { }

const GlobalEventContext = React.createContext({});

const App: React.FunctionComponent<EpidemicAppProps> = (props) => {

  return (
    <ConfigProvider {...antdConfig}>
      <GlobalEventContext.Provider value={props}>
        <EpidemicLayout>
            <Switch>
              {ROUTE_CONFIG.map(({ components, ...props }, index) =>
                <Route key={`${props.path}${index}`} {...props}>
                  {components}
                </Route>
              )}
            </Switch>
        </EpidemicLayout>
      </GlobalEventContext.Provider>
    </ConfigProvider>
  );

}

export default App;