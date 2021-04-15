import React from 'react'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import useBaseQuery from 'src/components/useBaseQuery'
import { getCountryConfirm } from 'src/fetch'
import { defaultEchartStyle } from 'src/config/charts'
import Spin from 'antd/lib/spin'

interface GetCountryConfirmProps {
  confirm: number
  name: string
}

const ChinaConfirmChart = () => {
  const { data } = useBaseQuery('getCountryConfirm', getCountryConfirm)

  return (
    <div className="content-card">
      <div className="title">全球确诊人数最多国家</div>
      <Spin spinning={Array.isArray(data)}>
        <ReactEchartsCore
          echarts={echarts}
          option={options(Array.isArray(data) ? data : [])}
          style={defaultEchartStyle}
        />
      </Spin>
    </div>
  )
}

const options = (list: GetCountryConfirmProps[]) => ({
  xAxis: {
    name: '国家',
    type: 'category',
    data: list.map(({ name }) => name),
  },
  yAxis: [
    {
      name: '人数',
      type: 'value',
    },
  ],
  series: [
    {
      data: list.map(({ confirm }) => confirm),
      type: 'bar',
    },
  ],
})

export default ChinaConfirmChart
