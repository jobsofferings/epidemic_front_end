import React from 'react'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import useBaseQuery from 'src/components/useBaseQuery'
import { getChinaDayList } from 'src/fetch'
import { defaultEchartStyle, defaultSeries } from 'src/config/charts'

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
  const { data } = useBaseQuery('getChinaDayList', getChinaDayList)

  return (
    <div className="content-card">
      <div className="title">国内确诊人数走势图</div>
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

export default ChinaConfirmChart
