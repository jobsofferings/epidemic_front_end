import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { LOGO } from 'src/svg'
import './index.less'

export const PATH_ROOT = '/'
export const PATH_FOREIGN = '/foreign'
export const PATH_NEWS = '/news'
export const PATH_PREVENTION = '/prevention'

const navList = [
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
]

const Header = (props: any) => {
  const [navIndex, setNavIndex] = useState(0)

  const pathname = props.history.location.pathname

  const handleChangerouter = (navIndex: number) => setNavIndex(navIndex)

  const renderNav = () => {
    const spanStyle = {
      left: `${navIndex * 85 + 10}px`,
      width: 64,
    }
    return (
      <ul>
        {navList.map((item, index) => (
          <Link to={item.href} key={index}>
            <li
              onClick={() => {
                handleChangerouter(index)
              }}
            >
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

  React.useEffect(() => {
    navList.map((item, index) => {
      if (item.href === pathname) {
        setNavIndex(index)
      }
    })
  }, [])

  return (
    <div className="header">
      <div className="nav">
        <div className="logo">
          <LOGO />
        </div>
        <div className="list">{renderNav()}</div>
      </div>
    </div>
  )
}

export default withRouter(Header)
