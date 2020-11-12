import React, { useEffect, useRef, CSSProperties } from "react";
import { mockData } from "../config/mock";
import echarts from 'echarts';
import { dateFormat } from "../config/utils";

const defaultEchartStyle: CSSProperties = { width: 1000, height: 400, background: 'white', padding: 10, boxSizing: 'border-box' };

const MockEchart = () => {

  const ref = useRef<any>(null);

  useEffect(() => {

    const myChart = echarts.init(ref && ref.current);
    // 绘制图表
    myChart.setOption({
      title: { text: '累计确诊' },
      tooltip: {
        show: true,
        formatter: ({ name, value }: any) => `${dateFormat(new Date(parseInt(name)), 'MM-dd')}<br>累计确诊：${value}`
      },
      xAxis: {
        type: 'category',
        data: mockData.map(({ t }) => t),
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#999999',
          align: 'center',
          formatter: (value: any) => dateFormat(new Date(parseInt(value)), 'MM-dd')
        },
      },
      yAxis: {},
      series: [{
        name: '累计确诊数量',
        type: 'bar',
        data: mockData.map(({ c }) => c),
        animationDelay: (idx: number) => idx * 2
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 1
    });

  }, [])

  return <div ref={ref} style={defaultEchartStyle}></div>;
}

export default MockEchart;