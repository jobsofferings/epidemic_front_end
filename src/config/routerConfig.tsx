import React from "react";

export interface RouteConfigProps {
  path: string;
  exact: boolean;
  components: JSX.Element | null;
}

export const ROUTE_CONFIG: RouteConfigProps[] = [{
  path: '/ability/a',
  exact: true,
  components: <div>123456aaaaaaaa</div>
}, {
  path: '/ability/b',
  exact: true,
  components: <div>123456bbbbbbbbbbbbbbbb</div>
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
