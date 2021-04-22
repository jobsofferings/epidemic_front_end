import React from 'react'
import { ReactComponent as QUOTES_DOWN } from 'src/images/QUOTES_DOWN.svg'
import { ReactComponent as QUOTES_UP } from 'src/images/QUOTES_UP.svg'
import { message } from 'antd'
import './index.less'

function MesHeader() {
  const handleSubmit = () => {
    message.info('当前功能未开发')
  }

  return (
    <div className="archive-header-area">
      <div className="archive-header">
        <div className="archive-header-topic">
          <div>
            <QUOTES_UP />
          </div>
          <div>
            <p>
              人的平均寿命77岁，一共28105天，67w小时，4047w分钟，24亿秒左右，这10秒你在读这段话，这10秒你属于我。你好陌生人，我爱你
            </p>
          </div>
          <div>
            <QUOTES_DOWN />
          </div>
        </div>
        <div className="archive-header-submit">
          <button onClick={handleSubmit}>留下足迹</button>
        </div>
        <div className="archive-header-num">
          <p>已有 40 条留言</p>
        </div>
      </div>
    </div>
  )
}

export default MesHeader
