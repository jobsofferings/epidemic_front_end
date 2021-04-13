import React from 'react'
import DevicesMapThird from 'src/page/DevicesMapThird'
import Foreign from 'src/page/Foreign'
import Home from 'src/page/Home'
import MockEchart from 'src/page/MockEchart'

export interface RouteConfigProps {
  path: string
  exact: boolean
  components: JSX.Element | null
}

export const PATH_ROOT = '/'
export const PATH_DOMESTIC = '/data/domestic'
export const PATH_FOREIGN = '/data/foreign'
export const PATH_COMPARED = '/data/compared'
export const PATH_NEWS = '/news'
export const PATH_PREVENTION = '/prevention'

export const ROUTE_CONFIG: RouteConfigProps[] = [
  {
    path: PATH_ROOT,
    exact: true,
    components: <Home />,
  },
  {
    path: PATH_DOMESTIC,
    exact: true,
    components: <MockEchart />,
  },
  {
    path: PATH_FOREIGN,
    exact: true,
    components: <Foreign />,
  },
  {
    path: PATH_COMPARED,
    exact: true,
    components: <DevicesMapThird />,
  },
  {
    path: PATH_NEWS,
    exact: true,
    components: <div>news</div>,
  },
  {
    path: PATH_PREVENTION,
    exact: true,
    components: <div>prevention</div>,
  },
]
