import React from "react";
import { Layout, Row } from 'antd';

const HeaderWrapper: React.FunctionComponent = (props) => {

  return <Layout.Header {...props}>
    <Row justify="space-between" align="middle" className="open-header-main">
1
    </Row>
  </Layout.Header>;

}

export default HeaderWrapper;