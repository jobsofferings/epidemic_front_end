import React from 'react'
import { Spin } from 'antd'
import BaseContent from 'src/components/BaseContent'
import ArticleDetailContent from './ArticleDetailContent'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
  const { id = '' } = useParams<OPUtils.Record>()

  return (
    <div className="content-area" style={{ width: 1000 }} key="one">
      <Spin spinning={false}>
        <ArticleDetailContent id={id} />
      </Spin>
    </div>
  )
}

export default BaseContent(ArticleDetail)
