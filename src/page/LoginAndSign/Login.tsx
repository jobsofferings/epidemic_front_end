import React, { useState } from 'react'
import { message } from 'antd'
import classNames from 'classnames'
import { useMutation } from 'react-query'
import { login, sign } from 'src/fetch'
import './index.less'
import { withRouter } from 'react-router'
import { PATH_ROOT } from 'src/components/Header'

interface LoginProps {
  email: string
  password: string
}

interface SignProps {
  username: string
  email: string
  password: string
}

export interface User {
  username?: string
  email?: string
}

const defaultLogin: LoginProps = {
  email: '',
  password: '',
}

const defaultSign: SignProps = {
  email: '',
  password: '',
  username: '',
}

const Login = (props: any) => {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const [isShowSign, setIsShowSign] = useState(true)

  const [loginParams, setLoginParams] = useState<LoginProps>(defaultLogin)
  const [signParams, setSignParams] = useState<SignProps>(defaultSign)

  const { mutate: loginFetch } = useMutation<any>(
    ['login', loginParams],
    () => login(loginParams),
    {
      onSuccess: ({ data }) => {
        const { flag, user, msg } = data
        if (!flag) {
          message.error(msg)
          setLoginParams(defaultLogin)
        } else {
          message.success(`用户：${user.username} 登录成功`)
          afterSuccess(user)
        }
      },
    },
  )

  const { mutate: signFetch } = useMutation<any>(
    ['sign', signParams],
    () => sign(signParams),
    {
      onSuccess: ({ data }) => {
        const { flag, user, msg } = data
        if (!flag) {
          message.error(msg)
          setSignParams(defaultSign)
        } else {
          message.success(`用户：${user.username} 注册成功`)
          afterSuccess(user)
        }
      },
    },
  )

  const afterSuccess = (user: User) => {
    saveStorage(user)
    props.history.push(PATH_ROOT)
  }

  const saveStorage = (user: User) => {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  const handleSlideSign = () => {
    setIsShowSign(!isShowSign)
    setIsShowLogin(false)
  }

  const handleSlideLogin = () => {
    setIsShowLogin(!isShowLogin)
    setIsShowSign(false)
  }

  const handleLogin = () => {
    loginFetch()
  }

  const handleSign = () => {
    signFetch()
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
              value={signParams.username}
              onChange={handleChangeSignParams}
            />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="邮箱"
              value={signParams.email}
              onChange={handleChangeSignParams}
            />
            <input
              type="password"
              name="password"
              className="input"
              placeholder="密码"
              value={signParams.password}
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
                value={loginParams.email}
                onChange={handleChangeLoginParams}
              />
              <input
                type="password"
                name="password"
                placeholder="密码"
                value={loginParams.password}
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

export default withRouter(Login)
