import React, { CSSProperties } from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts'
import { dateFormat } from 'src/config/utils'

const defaultEchartStyle: CSSProperties = {
  width: 1000,
  height: 400,
  background: 'white',
  padding: 10,
  boxSizing: 'border-box',
}

const MockEchart = () => {
  return (
    <ReactEchartsCore
      echarts={echarts}
      option={options}
      className="echarts-for-echarts"
      style={defaultEchartStyle}
      theme="my_theme"
    />
  )
}

const options = {
  title: { text: '累计确诊' },
  tooltip: {
    show: true,
    formatter: ({ name, value }: any) =>
      `${dateFormat(new Date(parseInt(name)), 'MM-dd')}<br>累计确诊：${value}`,
  },
  xAxis: {
    type: 'category',
    data: [].map(({ t }) => t),
    splitLine: {
      show: false,
    },
    axisLabel: {
      color: '#999999',
      align: 'center',
      formatter: (value: any) => dateFormat(new Date(parseInt(value)), 'MM-dd'),
    },
  },
  yAxis: {},
  series: [
    {
      name: '累计确诊数量',
      type: 'line',
      data: [].map(({ c }) => c),
      itemStyle: {
        color: '#8ec6ad',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#8ec6ad',
          },
          {
            offset: 1,
            color: '#ffe',
          },
        ]),
      },
      animationDelay: (idx: number) => idx * 2,
    },
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: (idx: number) => idx * 1,
}

export default MockEchart
