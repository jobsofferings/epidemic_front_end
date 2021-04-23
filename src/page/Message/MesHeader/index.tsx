import React, { useState } from 'react'
import { ReactComponent as QUOTES_DOWN } from 'src/images/QUOTES_DOWN.svg'
import { ReactComponent as QUOTES_UP } from 'src/images/QUOTES_UP.svg'
import { useMutation } from 'react-query'
import { addMessage } from 'src/fetch'
import { User } from 'src/page/LoginAndSign/Login'
import { Input, Modal, message as AntdMessage } from 'antd'
import './index.less'

const { TextArea } = Input

interface MesHeaderProps {
  user: User
  messagesLength: number
  refetch?: Function
}

const MesHeader = ({ user, messagesLength, refetch }: MesHeaderProps) => {
  const [messageContent, setMessageContent] = useState('')
  const [visible, setVisible] = useState(false)

  const { mutate: fetchAddMessage } = useMutation<any>(
    ['addMessage', { ...user, messageContent }],
    () => addMessage({ ...user, messageContent }),
    {
      onSuccess: ({ data }) => {
        const { flag, message } = data
        if (flag) {
          AntdMessage.success(message)
          refetch && refetch()
          handleHideModal()
        } else {
          AntdMessage.error(message)
        }
      },
    },
  )

  const handleSubmit = () => fetchAddMessage()

  const handleShowModal = () => {
    setTimeout(() => {
      setVisible(true)
    }, 300)
  }

  const handleHideModal = () => setVisible(false)

  return (
    <div className="archive-header-area">
      <div className="archive-header">
        <div className="archive-header-topic">
          <div>
            <QUOTES_UP />
          </div>
          <div>
            <p>愿山河无恙，人间皆安</p>
            <p>没有一个冬天不可逾越，没有一个春天不会来临。</p>
          </div>
          <div>
            <QUOTES_DOWN />
          </div>
        </div>
        <div className="archive-header-submit login">
          <button onClick={handleShowModal} className="button">
            留下足迹
          </button>
        </div>
        <div className="archive-header-num">
          <p>已有 {messagesLength} 条留言</p>
        </div>
      </div>
      <Modal
        visible={visible}
        title="鼓励更多的人"
        onOk={handleSubmit}
        onCancel={handleHideModal}
      >
        <TextArea
          value={messageContent}
          onChange={({ target: { value } }) => setMessageContent(value)}
        />
      </Modal>
    </div>
  )
}

export default MesHeader
