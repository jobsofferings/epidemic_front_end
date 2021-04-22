import React from 'react'
import MesContent from './MesContent'
import MesHeader from './MesHeader'
import BaseContent from 'src/components/BaseContent'
import './index.less'

function Message() {
  return (
    <div className="content-area" key="four">
      <MesHeader />
      <MesContent />
    </div>
  )
}

export default BaseContent(Message)
