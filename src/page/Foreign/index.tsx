import React from 'react'
import BaseContent from 'src/components/BaseContent'
import AllCountryConfirm from '../components/AllCountryConfirmChart'
import ForeignConfirmChart from '../components/ForeignConfirmChart'
import './index.less'

const Foreign = () => {
  return (
    <div className="content-area">
      <ForeignConfirmChart />
      <AllCountryConfirm />
    </div>
  )
}

export default BaseContent(Foreign)
