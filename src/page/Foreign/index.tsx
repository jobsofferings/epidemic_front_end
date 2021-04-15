import React from 'react'
import BaseContent from 'src/components/BaseContent'
import ForeignConfirmChart from '../components/ForeignConfirmChart'
import './index.less'

const Foreign = () => {
  return (
    <div className="content-area">
      <ForeignConfirmChart />
    </div>
  )
}

export default BaseContent(Foreign)
