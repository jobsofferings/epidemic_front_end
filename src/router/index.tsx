import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { ROUTE_CONFIG } from 'src/config/router'

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      {ROUTE_CONFIG.map(({ components, ...props }, index) => (
        <Route key={`${props.path}${index}`} {...props}>
          {components}
        </Route>
      ))}
      <Redirect from="/*" to={'/'} />
    </Switch>
  </BrowserRouter>
)

export default BasicRoute
