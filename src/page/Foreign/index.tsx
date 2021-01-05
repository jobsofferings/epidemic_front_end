import { ColumnProps } from 'antd/lib/table'
import React from 'react'
import BaseTable from 'src/components/BaseTable'
import { PAGE_LIMIT } from 'src/config/constants'
import { GET_FOREIGN } from 'src/gql/inews'
import useBaseQuery from 'src/hooks/useBaseQuery'
import './index.less'

const subTableStyle = { border: '1px solid #eee', borderBottom: 'none' }

const SUB_TABLE_LIMIT = 5

const columns: ColumnProps<any>[] = [
  {
    title: '地区',
    dataIndex: 'name',
  },
  {
    title: '累计确诊',
    dataIndex: 'confirm',
  },
  {
    title: '新增确诊',
    dataIndex: 'confirmAdd',
  },
  {
    title: '治愈',
    dataIndex: 'heal',
  },
  {
    title: '现存确诊',
    dataIndex: 'nowConfirm',
  },
  {
    title: '死亡',
    dataIndex: 'dead',
  },
]

const subColumns: ColumnProps<any>[] = [
  {
    title: '地区',
    dataIndex: 'name',
  },
  {
    title: '累计确诊',
    dataIndex: 'confirm',
  },
  {
    title: '新增确诊',
    dataIndex: 'confirmAdd',
  },
  {
    title: '治愈',
    dataIndex: 'heal',
  },
  {
    title: '现存确诊',
    dataIndex: 'nowConfirm',
  },
  {
    title: '死亡',
    dataIndex: 'dead',
  },
]

const Foreign = () => {
  const {
    data: { list },
  } = useBaseQuery({
    query: GET_FOREIGN,
    variables: {},
  })

  console.log(list)

  return (
    <div className="foreign-area">
      <BaseTable
        columns={columns}
        dataSource={list || []}
        expandable={{
          childrenColumnName: 'notChildren',
          expandedRowRender: ({ children }) => {
            const dataSource = (children || []).slice(0, SUB_TABLE_LIMIT)
            return (
              <div>
                <div className="title">Top{SUB_TABLE_LIMIT} 国内地区</div>
                <BaseTable
                  style={subTableStyle}
                  columns={subColumns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey="name"
                />
              </div>
            )
          },
          rowExpandable: ({ children }) => children && children.length,
        }}
        pagination={{
          total: (list || []).length,
          pageSize: PAGE_LIMIT,
        }}
        rowKey="name"
      />
    </div>
  )
}

export default Foreign
