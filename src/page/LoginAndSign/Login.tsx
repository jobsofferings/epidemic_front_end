import classNames from 'classnames'
import React, { useState } from 'react'
import './index.less'

const Login = () => {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const [isShowSign, setIsShowSign] = useState(true)

  const [loginParams, setLoginParams] = useState({})
  const [signParams, setSignParams] = useState({})

  const handleSlideSign = () => {
    setIsShowSign(!isShowSign)
    setIsShowLogin(false)
  }

  const handleSlideLogin = () => {
    setIsShowLogin(!isShowLogin)
    setIsShowSign(false)
  }

  const handleLogin = () => {
    console.log(loginParams)
  }
  const handleSign = () => {
    console.log(signParams)
  }

  const handleChangeSignParams: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setSignParams({
      ...signParams,
      [name]: value,
    })
  }

  const handleChangeLoginParams: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setLoginParams({
      ...loginParams,
      [name]: value,
    })
  }

  return (
    <div className="login-sign-area">
      <div className="form-structor">
        <div className={classNames('signup', { 'slide-up': !isShowSign })}>
          <h2 className="form-title" onClick={handleSlideSign}>
            <span>或</span>
            <p>注册</p>
          </h2>
          <div className="form-holder">
            <input
              type="text"
              name="username"
              className="input"
              placeholder="用户名"
              onChange={handleChangeSignParams}
            />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="邮箱"
              onChange={handleChangeSignParams}
            />
            <input
              type="password"
              name="password"
              className="input"
              placeholder="密码"
              onChange={handleChangeSignParams}
            />
          </div>
          <button onClick={handleSign} className="submit-btn">
            注册
          </button>
        </div>
        <div className={classNames('login', { 'slide-up': !isShowLogin })}>
          <div className="center">
            <h2 className="form-title" onClick={handleSlideLogin}>
              <span>或</span>
              <p>登录</p>
            </h2>
            <div className="form-holder">
              <input
                type="email"
                name="email"
                placeholder="邮箱"
                onChange={handleChangeLoginParams}
              />
              <input
                type="password"
                name="password"
                placeholder="密码"
                onChange={handleChangeLoginParams}
              />
            </div>
            <button onClick={handleLogin} className="submit-btn">
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
