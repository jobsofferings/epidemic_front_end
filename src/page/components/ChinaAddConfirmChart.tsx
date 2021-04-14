import React from 'react'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import useBaseQuery from 'src/components/useBaseQuery'
import { getChinaDayAddList } from 'src/fetch'

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

const ChinaConfirmChart = () => {
  const { data } = useBaseQuery('getChinaDayAddList', getChinaDayAddList)
  console.log(data)
  return (
    <div className="content-card">
      <div className="title">国内新增确诊人数走势图</div>
      <ReactEchartsCore
        echarts={echarts}
        option={options(Array.isArray(data) ? data : [])}
        style={defaultEchartStyle}
      />
    </div>
  )
}

const options = (list: ChinaDayListItemProps[]) => ({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['新增确诊人数', '新增治愈人数'],
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
      name: '新增确诊人数',
      data: list.map(({ confirm }) => confirm),
    },
    {
      ...defaultSeries('#5da654'),
      name: '新增治愈人数',
      data: list.map(({ heal }) => heal),
    },
  ],
})

export default ChinaConfirmChart
