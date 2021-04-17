import React from 'react'
import BaseContent from 'src/components/BaseContent'
import ChinaConfirmChart from '../components/ChinaConfirmChart'
import ChinaAddConfirmChart from '../components/ChinaAddConfirmChart'
import ChinaProvinceMapCharts from '../components/ChinaProvinceMapCharts'
import './index.less'

const China = () => {
  return (
    <div className="content-area">
      <ChinaProvinceMapCharts />
      <ChinaConfirmChart />
      <ChinaAddConfirmChart />
    </div>
  )
}

export default BaseContent(China)
