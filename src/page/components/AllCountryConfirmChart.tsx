import React, { useState } from 'react'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import useBaseQuery from 'src/components/useBaseQuery'
import { getInfoByCountry } from 'src/fetch'
import { defaultEchartStyle, defaultSeries } from 'src/config/charts'
import Spin from 'antd/lib/spin'
import AllCountryConfirmChartSelect from './AllCountryConfirmChartSelect'

interface AllCountryConfirmListProps {
  confirm: number
  confirm_add: number
  date: string
  dead: number
  heal: number
  y: string
}

const AllCountryConfirmChart = () => {
  const [country, setCountry] = useState<string>()

  const { data } = useBaseQuery(['getInfoByCountry', country], () =>
    getInfoByCountry({ country }),
  )

  return (
    <div className="content-card">
      <div className="title">海外疫情</div>
      <AllCountryConfirmChartSelect onChange={setCountry} />
      <Spin spinning={!Array.isArray(data)}>
        <ReactEchartsCore
          echarts={echarts}
          option={options(Array.isArray(data) ? data : [], country)}
          style={defaultEchartStyle}
        />
      </Spin>
    </div>
  )
}

const options = (list: AllCountryConfirmListProps[], country?: string) => ({
  title: {
    text: `${country || ''}现存确诊人数与治愈人数走势图`,
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['现存确诊人数', '治愈人数'],
    height: 50,
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 20,
  },
  xAxis: {
    name: '日期',
    type: 'category',
    data: list.map(
      ({ y, date }) => `${y}-${date.split('.')[0]}-${date.split('.')[1]}`,
    ),
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
      name: '现存确诊人数',
      data: list.map(({ confirm }) => confirm),
    },
    {
      ...defaultSeries('#5da654'),
      name: '治愈人数',
      data: list.map(({ heal }) => heal),
    },
  ],
})

export default AllCountryConfirmChart
