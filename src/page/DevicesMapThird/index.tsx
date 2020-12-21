import React, { CSSProperties } from 'react';
import { threeData } from '../../config/mock';
import './index.less';

const defaultEchartStyle: CSSProperties = { width: 1200, height: 600, background: 'white', padding: 10, boxSizing: 'border-box' };

const data: any = JSON.parse(threeData);

function getAirportCoord(idx: number) {
  return [data.airports[idx][3], data.airports[idx][4]];
}
var routes = data.routes.map(function (airline: any) {
  return [
    getAirportCoord(airline[1]),
    getAirportCoord(airline[2])
  ];
});
routes.pop();

const DevicesMapThird = () => {

  return <div style={defaultEchartStyle}></div>;

}

export default DevicesMapThird;