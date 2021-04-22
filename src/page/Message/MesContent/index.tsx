import React, { useEffect, useState } from 'react'
import { message as MessageAntd, Tooltip } from 'antd'
import { ReactComponent as LIKE } from 'src/images/LIKE.svg'
import useBaseQuery from 'src/components/useBaseQuery'
import { getMessages, messageLike } from 'src/fetch'
import { dateFormat, safeParse } from 'src/config/utils'
import { useMutation } from 'react-query'
import { User } from 'src/page/LoginAndSign/Login'
import './index.less'

const MesContent = () => {
  const [user, setUser] = useState<User>({})
  const [reqId, setReqId] = useState<string>()

  useEffect(() => {
    if (
      sessionStorage['user'] !== JSON.stringify(user) &&
      sessionStorage['user']
    ) {
      setUser(safeParse(sessionStorage['user']))
    }
  })

  let { data, refetch } = useBaseQuery(['getMessages', user], () =>
    getMessages(user),
  )

  const { mutate: changeLike } = useMutation<any>(
    ['messageLike', { ...user, _id: reqId }],
    () => messageLike({ ...user, _id: reqId }),
    {
      onSuccess: ({ data }) => {
        const { flag, message } = data
        if (flag) {
          MessageAntd.success(message)
          refetch()
        } else {
          MessageAntd.error(message)
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

  return (
    <div className="archive-content-area">
      <div className="archive-content">
        <div className="masonry">
          {(Array.isArray(data) ? data : []).map((item, index) => {
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
      </div>
    </div>
  )
}

export default MesContent
