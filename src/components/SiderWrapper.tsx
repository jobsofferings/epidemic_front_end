import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import EpidemicIcon from "../util/EpidemicIcon";
import { LinkProps } from 'react-router-dom';
import { MenuProps } from 'antd/lib/menu/index.d';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { get } from 'lodash';

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

export interface BaseMenuProps {
  menuConfig: BaseMenuConfig[];
  menuProps?: MenuProps;
}

export interface BaseMenuConfig {
  path: string;
  title: React.ReactNode;
  linkProps?: Omit<LinkProps, 'to' | 'title'>;
  menuItemProps?: MenuItemProps;
  children?: BaseMenuConfig[];
  id?: number
  isSubMenu?: Boolean
}

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

const generateMenuItem = ({
  path,
  title,
  // linkProps,
  menuItemProps,
}: Omit<BaseMenuConfig, 'children'>) => {
  return (
    <Item key={path} {...menuItemProps}>
      {/* <Link
        {...{
          to: path,
          rel: 'noopener noreferrer',
          ...linkProps,
        }}
      > */}
      {title}
      {/* </Link> */}
    </Item>
  );
};

const SiderWrapper = () => {


  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed(!collapsed);

  return <>
    <Sider collapsed={collapsed} className="epidemic-menu" width={200}>
      <Menu
        className="epidemic-sider-menu"
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
      >
        {menuConfig.map(({ children, ...otherProps }) =>
          !children ? (
            generateMenuItem(otherProps)
          ) : (
              <SubMenu
                key={otherProps.path}
                title={otherProps.title}
                icon={get(otherProps, 'menuItemProps.icon')}
              >
                {children.map((v) => generateMenuItem(v))}
              </SubMenu>
            ),
        )}
      </Menu>
    </Sider>
    <div className='epidemic-triggle'>
      <EpidemicIcon type={collapsed ? 'icon-draw-right' : 'icon-draw-left'} onClick={toggleCollapse} />
    </div>
  </>;
  ;
}

export default SiderWrapper;