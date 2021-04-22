import React from 'react'
import {
  PATH_ROOT,
  PATH_FOREIGN,
  PATH_NEWS,
  PATH_PREVENTION,
  PATH_LOGIN,
  PATH_MESSAGE,
} from 'src/components/Header'
import China from 'src/page/China'
import Foreign from 'src/page/Foreign'
import Login from 'src/page/LoginAndSign/Login'
import Message from 'src/page/Message'
import News from 'src/page/News'
import Prevention from 'src/page/Prevention'

export interface RouteConfigProps {
  path: string
  exact: boolean
  components: JSX.Element | null
}

export const ROUTE_CONFIG: RouteConfigProps[] = [
  {
    path: PATH_ROOT,
    exact: true,
    components: <China />,
  },
  {
    path: PATH_LOGIN,
    exact: true,
    components: <Login />,
  },
  {
    path: PATH_FOREIGN,
    exact: true,
    components: <Foreign />,
  },
  {
    path: PATH_NEWS,
    exact: true,
    components: <News />,
  },
  {
    path: PATH_PREVENTION,
    exact: true,
    components: <Prevention />,
  },
  {
    path: PATH_MESSAGE,
    exact: true,
    components: <Message />,
  },
]
