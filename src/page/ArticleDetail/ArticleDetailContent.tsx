import React from 'react'
import { Col, Row, Spin } from 'antd'
import BaseMarkdown from 'src/components/BaseMarkdown/BaseMarkdown'
import { articleDetail } from 'src/fetch'
import useBaseQuery from 'src/hooks/useBaseQuery'
import { formatDateToString } from 'src/config/utils'
import './ArticleDetailContent.less'

interface ArticleDetailContentProps {
  id: string
}

const ArticleDetailContent = ({ id }: ArticleDetailContentProps) => {
  const { data, loading } = useBaseQuery({
    query: '/articleDetail',
    queryFn: () =>
      articleDetail({
        id,
      }),
    cacheTime: 0,
  })

  return (
    <div className="article-detail-content">
      <Spin spinning={loading}>
        {!loading && (
          <>
            <div className="author">
              <Col>
                <div className="name">{data.author}</div>
                <Row>
                  <div className="time">
                    {formatDateToString(new Date(parseInt(data.timer)))}
                  </div>
                  <div className="read">阅读{data.read}</div>
                </Row>
              </Col>
            </div>
            <h1>{data.title}</h1>
          </>
        )}
        <BaseMarkdown source={data?.summary || ''} />
      </Spin>
    </div>
  )
}

export default ArticleDetailContent
