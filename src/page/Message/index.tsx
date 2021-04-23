import React, { useEffect, useState } from 'react'
import MesContent from './MesContent'
import MesHeader from './MesHeader'
import BaseContent from 'src/components/BaseContent'
import { safeParse } from 'src/config/utils'
import { User } from '../LoginAndSign/Login'
import './index.less'
import useBaseQuery from 'src/components/useBaseQuery'
import { getMessages } from 'src/fetch'

function Message() {
  const [user, setUser] = useState<User>({})

  useEffect(() => {
    if (
      sessionStorage['user'] !== JSON.stringify(user) &&
      sessionStorage['user']
    ) {
      setUser(safeParse(sessionStorage['user']))
    }
  })

  let { data, refetch, loading } = useBaseQuery(['getMessages', user], () =>
    getMessages(user),
  )

  return (
    <div className="content-area" key="four">
      <MesHeader
        user={user}
        refetch={refetch}
        messagesLength={Array.isArray(data) ? data.length : 0}
      />
      <MesContent
        user={user}
        messages={data}
        refetch={refetch}
        loading={loading}
      />
    </div>
  )
}

export default BaseContent(Message)
