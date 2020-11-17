import React from "react";
import MockEchart from "../page/MockEchart";
import DevicesMapThird from "../page/DevicesMapThird";

export interface RouteConfigProps {
  path: string;
  exact: boolean;
  components: JSX.Element | null;
}

export const ROUTE_CONFIG: RouteConfigProps[] = [{
  path: '/ability/a',
  exact: true,
  components: <MockEchart />
}, {
  path: '/ability/b',
  exact: true,
  components: <DevicesMapThird />
}, {
  path: '/ability/c',
  exact: true,
  components: <div>123456cccccccccccccccccccccccc</div>
}, {
  path: '/earth',
  exact: true,
  components: <div>earth</div>
}, {
  path: '/city',
  exact: true,
  components: <div>city</div>
},];
