import React from 'react'
import BaseContent from 'src/components/BaseContent'
import './index.less'

const Prevention = () => {
  return (
    <div>
      数据是从多个来源收集的，这些来源会在不同的时间更新，可能不会始终保持一致。
      某些位置可能无法提供完整的信息。
    </div>
  )
}

export default BaseContent(Prevention)
