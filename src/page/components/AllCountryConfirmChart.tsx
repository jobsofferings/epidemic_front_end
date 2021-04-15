import React, { useState } from 'react'
import echarts from 'echarts'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import useBaseQuery from 'src/components/useBaseQuery'
import { getCountryConfirm } from 'src/fetch'
import { defaultEchartStyle } from 'src/config/charts'
import Spin from 'antd/lib/spin'
import AllCountryConfirmChartSelect from './AllCountryConfirmChartSelect'

interface GetCountryConfirmProps {
  confirm: number
  name: string
}

const AllCountryConfirmChart = () => {
  const [params, setParams] = useState<OPUtils.Record>({
    limit: 10,
  })

  const { data } = useBaseQuery(['todos', params], () =>
    getCountryConfirm(params),
  )

  return (
    <div className="content-card">
      <div className="title">海外疫情</div>
      <AllCountryConfirmChartSelect
        onChange={(country) => setParams({ ...params, country })}
      />
      <Spin spinning={!Array.isArray(data)}>
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
  tooltip: {
    trigger: 'item',
  },
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

export default AllCountryConfirmChart
