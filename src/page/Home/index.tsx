import React from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import echarts from 'echarts'
import BaseContent from 'src/components/BaseContent'
import useBaseQuery from 'src/components/useBaseQuery'
import { getChinaDayList } from 'src/fetch'
import { Spin } from 'antd'
import './index.less'

interface ChinaDayListItemProps {
  confirm: number
  date: string
  dead: number
  deadRate: string
  heal: number
  healRate: string
  importedCase: number
  noInfect: number
  nowConfirm: number
  nowSevere: number
  suspect: number
}

const defaultEchartStyle: React.CSSProperties = {
  width: 1000,
  height: 400,
  background: 'white',
  padding: 10,
  boxSizing: 'border-box',
}

const defaultSeries = (color: string, secondColor = '#ffe') => ({
  type: 'line',
  itemStyle: {
    color,
  },
  lineStyle: {
    color,
    width: 1,
  },
  areaStyle: getAreaStyle(color, secondColor),
})

const getAreaStyle = (firstColor: string, secondColor: string) => ({
  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: firstColor,
    },
    {
      offset: 1,
      color: secondColor,
    },
  ]),
})

const Home = () => {
  const { data, loading } = useBaseQuery({
    query: [{}],
    queryFunction: getChinaDayList,
  })

  return (
    <div className="content-area">
      <Spin spinning={loading}>
        <ReactEchartsCore
          echarts={echarts}
          option={options(Array.isArray(data) ? data : [])}
          className="echarts-for-echarts"
          style={defaultEchartStyle}
        />
      </Spin>
    </div>
  )
}

const options = (list: ChinaDayListItemProps[]) => ({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['现存确诊人数', '累计确诊人数'],
    left: '2.5%',
    height: 50,
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 20,
  },
  xAxis: {
    name: '日期',
    type: 'category',
    data: list.map(({ date }) => date),
    axisLabel: {
      color: '#999999',
      align: 'center',
    },
  },
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      ...defaultSeries('rgb(255, 158, 68)'),
      name: '累计确诊人数',
      data: list.map(({ confirm }) => confirm),
    },
    {
      ...defaultSeries('#5da654', '#8ec6ad'),
      name: '现存确诊人数',
      data: list.map(({ confirm, heal }) => confirm - heal),
    },
  ],
})

export default BaseContent(Home)
