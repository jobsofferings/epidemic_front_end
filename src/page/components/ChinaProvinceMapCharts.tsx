import React from 'react'
import echarts from 'echarts'
import 'echarts/map/js/china'
import ReactEchartsCore from 'echarts-for-react/lib/core'
import { defaultEchartStyle } from 'src/config/charts'
import useBaseQuery from 'src/components/useBaseQuery'
import { getProvinceConfirmList } from 'src/fetch'

interface ProvinceConfirmProps {
  results?: ProvinceConfirmItemProps[]
  max?: number
  min?: number
}

interface ProvinceConfirmItemProps {
  province: string
  confirm: number
}

const ChinaProvinceMapCharts = () => {
  const { data } = useBaseQuery(
    'getProvinceConfirmList',
    getProvinceConfirmList,
  )

  return (
    <div className="content-card">
      <div className="title">国内确诊人数热力图</div>
      <ReactEchartsCore
        echarts={echarts}
        option={getOptions(data)}
        style={defaultEchartStyle}
      />
    </div>
  )
}

const getOptions = ({
  results = [],
  max = 100,
  min = 0,
}: ProvinceConfirmProps) => {
  var all: any = {
    options: [
      {
        tooltip: {
          formatter: (e: any) => `${e.name}现存确诊人数: ${e.value}`,
        },
        visualMap: {
          min,
          max,
          right: '90%',
          text: ['高', '低'],
          calculable: true,
        },
        series: [
          {
            center: 'center',
            data: results.map(({ province, confirm }) => ({
              name: province,
              value: confirm,
            })),
            label: {
              emphasis: {
                show: false,
              },
              normal: {
                show: false,
              },
            },
            mapType: 'china',
            roam: false,
            type: 'map',
          },
        ],
      },
    ],
  }

  return {
    baseOption: {
      timeline: {
        center: '100%',
        show: false,
        data: all.years,
      },
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut',
    },
    options: all.options,
  }
}

export default ChinaProvinceMapCharts
