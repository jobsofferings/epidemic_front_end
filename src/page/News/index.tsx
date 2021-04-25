import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NewsContent from './NewsContent'
import { Spin } from 'antd'
import BaseContent from 'src/components/BaseContent'
import useBaseQuery from 'src/hooks/useBaseQuery'
import { PAGE_LIMIT } from 'src/config/constants'
import { article } from 'src/fetch'
import './index.less'

const News = () => {
  const { id: key = '' } = useParams<OPUtils.Record>()
  const [params, setParams] = useState({
    limit: PAGE_LIMIT,
    offset: 0,
  })
  const [list, setList] = useState([])
  const [listTotal, setListTotal] = useState(0)

  const {
    data: { data, total },
    loading,
  } = useBaseQuery({
    query: [
      {
        ...params,
        key,
      },
    ],
    queryFn: ({ queryKey }) => article(queryKey[0]),
  })

  useEffect(() => {
    data && setList(list.concat(data))
    total && setListTotal(total)
  }, [data, total])

  const getMore = () => {
    if (params.offset < listTotal) {
      setParams({
        ...params,
        offset: params.offset + params.limit,
      })
    }
  }

  return (
    <div className="content-area" style={{ width: 1000 }} key="one">
      <Spin spinning={loading && !list.length}>
        <NewsContent data={list} total={listTotal} getMore={getMore} />
      </Spin>
    </div>
  )
}

export default BaseContent(News)
