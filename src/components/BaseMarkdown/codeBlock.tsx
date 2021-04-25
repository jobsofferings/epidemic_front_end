import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './index.less'

const CodeBlock = ({ value, ...props }: any) => {
  return (
    <SyntaxHighlighter language="" style={tomorrowNight} {...props}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
