import React from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

export const menuConfig = [
  {
    path: '/ability',
    title: 'option 1',
    linkProps: {},
    menuItemProps: {
      icon: <UserOutlined />
    },
    children: [
      {
        path: '/ability/a',
        title: 'option 11',
        linkProps: {},
        menuItemProps: {},
      },
      {
        path: '/ability/b',
        title: 'option 12',
        linkProps: {},
        menuItemProps: {}
      },
      {
        path: '/ability/c',
        title: 'option 13',
        linkProps: {},
        menuItemProps: {}
      },
    ]
  },
  {
    path: '/earth',
    title: 'option 2',
    linkProps: {},
    menuItemProps: {
      icon: <LaptopOutlined />
    }
  },
  {
    path: '/city',
    title: 'option 3',
    linkProps: {},
    menuItemProps: {
      icon: <NotificationOutlined />
    }
  },
]

export const DEFAULT_OPEN_KEY = ['/ability'];