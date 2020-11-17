import React, { useRef, useEffect, CSSProperties } from 'react';
import echarts from 'echarts';
import world from '../../static/world.jpg';
import starfield from '../../static/starfield.jpg';
import {threeData} from '../../config/mock';
import 'echarts-gl';
import './index.less';

const defaultEchartStyle: CSSProperties = { width: 1200, height: 600, background: 'white', padding: 10, boxSizing: 'border-box' };

const data:any = JSON.parse(threeData);

function getAirportCoord(idx: number) {
  return [data.airports[idx][3], data.airports[idx][4]];
}
var routes = data.routes.map(function(airline: any) {
  return [
      getAirportCoord(airline[1]),
      getAirportCoord(airline[2])
  ];
});
routes.pop();

const DevicesMapThird = () => {

  const ref = useRef<any>(null);

  useEffect(() => {

    const myChart: any = echarts.init(ref && ref.current);

    // 绘制图表
    myChart.setOption({
      backgroundColor: '#000',
      globe: {
        baseTexture: world,
        heightTexture: world,
        // 凹凸比例
        displacementScale: 0,
        // 是否真实
        shading: 'lambert',
        environment: starfield,
        realisticMaterial: {
          roughness: 0.9
        },
        postEffect: {
          enable: true
        },
        viewControl: {
          autoRotate: false,
          targetCoord: [114.46, 30.92]
        },
        light: {
          main: {
            intensity: 5,
            shadow: true
          }
        }
      },
      series: {
          type: 'lines3D',
          coordinateSystem: 'globe',
          blendMode: 'lighter',
          polyline: false,
          lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              opacity: 0.1
          },
          effect:{
            show: true
          },
          data: routes
      }
    });

  }, [])

  return <div ref={ref} style={defaultEchartStyle}></div>;

}

export default DevicesMapThird;