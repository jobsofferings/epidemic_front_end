import { message, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { safeParse } from 'src/config/utils'
import { User } from 'src/page/LoginAndSign/Login'
import { ReactComponent as LOGO } from '../../images/LOGO.svg'
import './index.less'

export const PATH_ROOT = '/'
export const PATH_LOGIN = '/login'
export const PATH_FOREIGN = '/foreign'
export const PATH_NEWS = '/news'
export const PATH_PREVENTION = '/prevention'
export const PATH_MESSAGE = '/message'

const defaultList = [
  {
    title: '国内疫情',
    href: PATH_ROOT,
  },
  {
    title: '国外疫情',
    href: PATH_FOREIGN,
  },
  {
    title: '新闻',
    href: PATH_NEWS,
  },
  {
    title: '预防',
    href: PATH_PREVENTION,
  },
  {
    title: '留言',
    href: PATH_MESSAGE,
  },
]

const Header = (props: any) => {
  const [list, setList] = useState<{ title: string; href: string }[]>([])
  const [user, setUser] = useState<User>({})

  const pathname = props.history.location.pathname

  useEffect(() => {
    setUser(safeParse(sessionStorage['user']))
  }, [])

  useEffect(() => {
    setList(Object.keys(user).length ? defaultList : defaultList.slice(0, 4))
  }, [user])

  const renderNav = () => {
    let navIndex = 0
    list.map((item, index) => {
      if (item.href === pathname) {
        navIndex = index
      }
    })
    const spanStyle = {
      left: `${navIndex * 85 + 10}px`,
      width: 64,
    }
    return (
      <ul>
        {list.map((item, index) => (
          <Link to={item.href} key={index}>
            <li>
              <span className={navIndex === index ? 'nav-active' : ''}>
                {item.title}
              </span>
            </li>
          </Link>
        ))}
        <span style={spanStyle}></span>
      </ul>
    )
  }

  const handleToLogin = () => {
    setTimeout(() => {
      props.history.push(PATH_LOGIN)
    }, 300)
  }

  const handleToLogout = () => {
    message.success(`用户：${user.username} 注销成功`)
    setTimeout(() => {
      sessionStorage.removeItem('user')
      setUser({})
      props.history.push(PATH_ROOT)
    }, 300)
  }

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <LOGO />
        </div>
        <div className="list">{renderNav()}</div>
        {!user.username && (
          <div className="login">
            <button onClick={handleToLogin} className="button">
              登录
            </button>
          </div>
        )}
        {user.username && (
          <Row className="login" align="middle">
            <div style={{ marginRight: '30px' }}>欢迎你，{user.username}</div>
            <button onClick={handleToLogout} className="button">
              注销
            </button>
          </Row>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
