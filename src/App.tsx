import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import EpidemicLayout from 'src/components/EpidemicLayout'
import antdConfig from 'src/config/antdConfig'
import { ROUTE_CONFIG } from 'src/config/router'
import apolloClient from 'src/apollo/apolloClient'
import './index.less'
import './reset.less'

export interface EpidemicAppProps {}

const InewsEventContext = React.createContext({})

const App: React.FunctionComponent<EpidemicAppProps> = (props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <ConfigProvider {...antdConfig}>
        <InewsEventContext.Provider value={props}>
          <EpidemicLayout>
            <Switch>
              {ROUTE_CONFIG.map(({ components, ...props }, index) => (
                <Route key={`${props.path}${index}`} {...props}>
                  {components}
                </Route>
              ))}
            </Switch>
          </EpidemicLayout>
        </InewsEventContext.Provider>
      </ConfigProvider>
    </ApolloProvider>
  )
}

export default App
