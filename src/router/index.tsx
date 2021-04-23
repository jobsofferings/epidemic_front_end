import React from 'react'
import { ConfigProvider } from 'antd'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import antdConfig from 'src/config/antdConfig'
import { ROUTE_CONFIG } from 'src/config/router'

const BasicRoute = () => (
  <BrowserRouter>
    <ConfigProvider {...antdConfig}>
      <Switch>
        {ROUTE_CONFIG.map(({ components, ...props }, index) => (
          <Route key={`${props.path}${index}`} {...props}>
            {components}
          </Route>
        ))}
        <Redirect from="/*" to={'/'} />
      </Switch>
    </ConfigProvider>
  </BrowserRouter>
)

export default BasicRoute
