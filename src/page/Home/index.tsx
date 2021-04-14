import React from 'react'
import BaseContent from 'src/components/BaseContent'
import ChinaConfirmChart from '../components/ChinaConfirmChart'
import ChinaAddConfirmChart from '../components/ChinaAddConfirmChart'
import './index.less'

const Home = () => {
  return (
    <div className="content-area">
      <ChinaConfirmChart />
      <ChinaAddConfirmChart />
    </div>
  )
}

export default BaseContent(Home)
