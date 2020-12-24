import React from 'react'
import { Col, Layout, Row } from 'antd'

const { Header } = Layout

const hoverStyle: React.CSSProperties = { cursor: 'pointer' }

const HeaderWrapper = () => {
  return (
    <Header className="epidemic-header">
      <Row>
        <Col style={hoverStyle}>数据分析</Col>
      </Row>
    </Header>
  )
}

export default HeaderWrapper
