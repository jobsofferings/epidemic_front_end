import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import EpidemicLayout from './components/EpidemicLayout';
import { ROUTE_CONFIG } from './config/routerConfig';
import './index.less';
import './reset.less';

export interface EpidemicAppProps { }

const GlobalEventContext = React.createContext({});

const App: React.FunctionComponent<EpidemicAppProps> = (props) => {

  return (
    <ConfigProvider>
      <GlobalEventContext.Provider value={props}>
        <EpidemicLayout>
          <BrowserRouter>
            <Switch>
              {ROUTE_CONFIG.map(({ components, ...props }, index) =>
                <Route key={`${props.path}${index}`} {...props}>
                  {components}
                </Route>
              )}
            </Switch>
          </BrowserRouter>
        </EpidemicLayout>
      </GlobalEventContext.Provider>
    </ConfigProvider>
  );

}

export default App;