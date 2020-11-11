import React from "react";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import EpidemicSider from "./EpidemicSider";

const menuConfig = [
  {
    path: 'option 1',
    title: 'option 1',
    linkProps: {},
    menuItemProps: {
      icon: <UserOutlined />
    },
    children: [
      {
        path: 'option 11',
        title: 'option 11',
        linkProps: {},
        menuItemProps: {},
      },
      {
        path: 'option 12',
        title: 'option 12',
        linkProps: {},
        menuItemProps: {}
      },
      {
        path: 'option 13',
        title: 'option 13',
        linkProps: {},
        menuItemProps: {}
      },
    ]
  },
  {
    path: 'option 2',
    title: 'option 2',
    linkProps: {},
    menuItemProps: {
      icon: <LaptopOutlined />
    }
  },
  {
    path: 'option 3',
    title: 'option 3',
    linkProps: {},
    menuItemProps: {
      icon: <NotificationOutlined />
    }
  },
]

const SiderWrapper = () => {

  return <EpidemicSider 
    {...{
      menuConfig,
      menuProps: { defaultOpenKeys: [], className: 'epidemic-sider-menu' },
    }}
  />
}

export default SiderWrapper;