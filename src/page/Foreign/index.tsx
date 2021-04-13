import { Row } from 'antd'
import Table, { ColumnProps } from 'antd/lib/table'
import React, { useEffect, useState } from 'react'
import { PAGE_LIMIT } from 'src/config/constants'
import DimensionRadio from './DimensionRadio'
import './index.less'

const subTableStyle = { border: '1px solid #eee', borderBottom: 'none' }
const rowStyle = { paddingLeft: 20, marginBottom: 10 }

const SUB_TABLE_LIMIT = 3
const DEFAULT_COLUMN_WIDTH = 190
const DEFAULT_SUB_COLUMN_WIDTH = 220

const default_column: (key: string) => ColumnProps<any> = (key: string) => ({
  width: DEFAULT_COLUMN_WIDTH,
  onFilter: (value, record) => record[key].indexOf(value) === 0,
  sorter: (a, b) => a[key] - b[key],
  dataIndex: key,
  align: 'center',
})

const columns: ColumnProps<any>[] = [
  {
    title: '国家',
    dataIndex: 'name',
    align: 'left',
    ellipsis: true,
  },
  {
    title: '累计确诊',
    ...default_column('confirm'),
  },
  {
    title: '新增确诊',
    ...default_column('dead'),
  },
  {
    title: '治愈',
    ...default_column('heal'),
  },
  {
    title: '现存确诊',
    ...default_column('nowConfirm'),
  },
  {
    title: '死亡',
    ...default_column('dead'),
  },
]

const subColumns: ColumnProps<any>[] = [
  {
    title: '地区',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '累计确诊',
    dataIndex: 'confirm',
    align: 'center',
    width: DEFAULT_SUB_COLUMN_WIDTH,
  },
  {
    title: '新增确诊',
    dataIndex: 'confirmAdd',
    align: 'center',
    width: DEFAULT_SUB_COLUMN_WIDTH,
  },
  {
    title: '治愈',
    dataIndex: 'heal',
    align: 'center',
    width: DEFAULT_SUB_COLUMN_WIDTH,
  },
  {
    title: '死亡',
    dataIndex: 'dead',
    align: 'center',
    width: DEFAULT_SUB_COLUMN_WIDTH,
  },
]

const Foreign = () => {
  const [continentList, setContinentList] = useState([])
  const [radiovalue, setRadioValue] = useState(0)

  const list: any[] = []

  useEffect(() => {
    setContinentList([])
  }, [])

  return (
    <div className="foreign-area">
      <Row style={rowStyle} justify="space-between" align="middle">
        <div className="title">海外疫情</div>
        <DimensionRadio
          onChange={({ target: { value } }) => setRadioValue(value)}
        />
      </Row>
      <Table
        columns={columns}
        dataSource={(radiovalue ? continentList : list) || []}
        expandable={{
          childrenColumnName: 'notChildren',
          expandedRowRender: ({ children = [] }) => {
            const dataSource = children.slice(0, SUB_TABLE_LIMIT)
            return (
              <>
                <div className="sub-title">Top{SUB_TABLE_LIMIT} 地区</div>
                <Table
                  style={subTableStyle}
                  columns={subColumns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey="name"
                />
              </>
            )
          },
          rowExpandable: ({ children }) =>
            Array.isArray(children) && !!children.length,
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
