import React from "react";
import { Layout } from 'antd';

const { Content } = Layout;

const contentStyle = { padding: '12px 24px', minHeight: 280 };

const ContentWrapper = () => {
  return <Content className='epidemic-content' style={contentStyle}>
    <div>Content</div>
  </Content>;
}

export default ContentWrapper;