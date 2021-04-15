import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals'
import Router from './router'
import './reset.less'
import './index.less'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000000,
    },
  },
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>,
  document.getElementById('root'),
)

reportWebVitals()
