import React, { useState } from 'react'
import { Modal, Spin, Tooltip } from 'antd'
import { ReactComponent as LIKE } from 'src/images/LIKE.svg'
import { ReactComponent as DELETE } from 'src/images/DELETE.svg'
import { deleteMessage, messageLike } from 'src/fetch'
import { dateFormat, defaultSendMessage } from 'src/config/utils'
import { useMutation } from 'react-query'
import { Authority, User } from 'src/page/LoginAndSign/Login'
import './index.less'

interface MesContentProps {
  user: User
  messages: any[]
  refetch?: Function
  loading: boolean
}

const MesContent = ({ user, messages, refetch, loading }: MesContentProps) => {
  const [reqId, setReqId] = useState<string>()

  const { mutate: changeLike } = useMutation<any>(
    ['messageLike', { ...user, _id: reqId }],
    () => messageLike({ ...user, _id: reqId }),
    {
      onSuccess: ({ data }) => {
        defaultSendMessage(data)
        const { flag } = data
        if (flag) {
          refetch && refetch()
        }
      },
    },
  )

  const { mutate: fetchDelete } = useMutation<any>(
    ['deleteMessage', { _id: reqId }],
    () => deleteMessage({ _id: reqId }),
    {
      onSuccess: ({ data }) => {
        defaultSendMessage(data)
        const { flag } = data
        if (flag) {
          refetch && refetch()
        }
      },
    },
  )

  const handleLike = (_id: string) => {
    setReqId(_id)
    setTimeout(() => {
      user.email && changeLike()
    }, 0)
  }

  const handleDelete = (_id: string) => {
    setReqId(_id)
    Modal.confirm({
      title: '是否删除该留言?',
      onOk: () => {
        user.email && user.authority === Authority.ADMIN && fetchDelete()
      },
    })
  }

  return (
    <div className="archive-content-area">
      <div className="archive-content">
        <Spin spinning={loading}>
          <div className="masonry">
            {(Array.isArray(messages) ? messages : []).map((item, index) => {
              return (
                <li key={index} className="archive-item item">
                  <div className="archive-item-header">
                    <Tooltip title="去TA的主页看看">
                      <p>{item.username}</p>
                    </Tooltip>
                  </div>
                  <div className="archive-item-content">
                    <p>{item.messageContent}</p>
                  </div>
                  <div className="archive-item-footer">
                    {user.email && user.authority === Authority.ADMIN && (
                      <div className="archive-item-footer-left">
                        <DELETE
                          className={item.isActive ? 'like-active' : ''}
                          onClick={() => handleDelete(item._id)}
                        />
                      </div>
                    )}
                    {user.email && (
                      <div className="archive-item-footer-left">
                        <LIKE
                          className={item.isActive ? 'like-active' : ''}
                          onClick={() => handleLike(item._id)}
                        />
                        <p>{item.num}</p>
                      </div>
                    )}
                    <div className="archive-item-footer-right">
                      <p>
                        {dateFormat(
                          new Date(parseInt(item.time)),
                          'yyyy/MM/dd HH:mm:ss',
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </div>
        </Spin>
      </div>
    </div>
  )
}

export default MesContent
