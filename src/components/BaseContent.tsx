import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './BaseContent.less'

const BaseContent: (fn: any) => () => JSX.Element = (fn: any) => {
  return () => (
    <div className="head">
      <Header />
      <div className="content">{fn()}</div>
      <Footer />
    </div>
  )
}

export default BaseContent
