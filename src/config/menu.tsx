import React from 'react'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import {
  PATH_ROOT,
  PATH_DOMESTIC,
  PATH_FOREIGN,
  PATH_COMPARED,
  PATH_NEWS,
  PATH_PREVENTION,
} from './router'

export const menuConfig = [
  {
    path: PATH_ROOT,
    title: '疫情数据',
    linkProps: {},
    menuItemProps: {
      icon: <UserOutlined />,
    },
    children: [
      {
        path: PATH_ROOT,
        title: '首页',
        linkProps: {},
        menuItemProps: {},
      },
      {
        path: PATH_DOMESTIC,
        title: '国内疫情状况',
        linkProps: {},
        menuItemProps: {},
      },
      {
        path: PATH_FOREIGN,
        title: '国外疫情状况',
        linkProps: {},
        menuItemProps: {},
      },
      {
        path: PATH_COMPARED,
        title: '国内外对比',
        linkProps: {},
        menuItemProps: {},
      },
    ],
  },
  {
    path: PATH_NEWS,
    title: '疫情新闻',
    linkProps: {},
    menuItemProps: {
      icon: <LaptopOutlined />,
    },
  },
  {
    path: PATH_PREVENTION,
    title: '预防小贴士',
    linkProps: {},
    menuItemProps: {
      icon: <NotificationOutlined />,
    },
  },
]

export const DEFAULT_OPEN_KEY = [PATH_ROOT]
