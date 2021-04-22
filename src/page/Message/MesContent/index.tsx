import React from 'react'
import { Tooltip, message } from 'antd'
import { ReactComponent as LIKE } from 'src/images/LIKE.svg'
import './index.less'

const messageList = [
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent: '你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
  {
    username: '三毛',
    imgSrc: 'http://www.jobsofferings.cn:4397/头像1.jpg',
    messageContent:
      '你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀', // 注意，这里允许输入100字，但是在后端那边需要再次判断
    timer: 10000000,
    timeFormated: '2020-03-17 14:47',
    like: 3,
    active: true,
  },
]

function MesContent() {
  const handleLike = () => {
    message.info('当前功能未开发')
  }

  return (
    <div className="archive-content-area">
      <div className="archive-content">
        <div className="masonry">
          {messageList.map((item, index) => {
            return (
              <li key={index} className="archive-item item">
                {/* 注意，这里允许点击跳转友链 */}
                <div className="archive-item-header">
                  <div>
                    <img src={item.imgSrc} alt="" />
                  </div>
                  <Tooltip title="去TA的主页看看">
                    <p>{item.username}</p>
                  </Tooltip>
                </div>
                <div className="archive-item-content">
                  <p>{item.messageContent}</p>
                </div>
                <div className="archive-item-footer">
                  <div className="archive-item-footer-left">
                    <LIKE
                      className={item.active ? 'like-active' : ''}
                      onClick={handleLike}
                    />
                    <p>{item.like}</p>
                  </div>
                  <div className="archive-item-footer-right">
                    <p>{item.timeFormated}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MesContent
