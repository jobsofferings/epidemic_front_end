import React from "react";

export interface RouteConfigProps {
  path: string;
  exact: boolean;
  components: JSX.Element | null;
}

export const ROUTE_CONFIG: RouteConfigProps[] = [{
  path: '/ability',
  exact: true,
  components: <div>123456</div>
}, {
  path: '/ability/a',
  exact: true,
  components: <div>123456aaaaaaaa</div>
}, {
  path: '/ability/b',
  exact: true,
  components: <div>123456bbbbbbbb</div>
},];
