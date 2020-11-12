import React from "react";
import EpidemicSider from "./EpidemicSider";
import { DEFAULT_OPEN_KEY, menuConfig } from "../config/menu";

const SiderWrapper = () => {

  return <EpidemicSider
    {...{
      menuConfig,
      menuProps: { defaultOpenKeys: DEFAULT_OPEN_KEY, className: 'epidemic-sider-menu' },
    }}
  />
}

export default SiderWrapper;