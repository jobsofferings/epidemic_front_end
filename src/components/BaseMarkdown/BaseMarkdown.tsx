import React from 'react'
import ReactMarkdown, { SourceProp } from 'react-markdown'
import CodeBlock from './codeBlock'
import gfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'
import './index.less'

const BaseMarkdown = ({ ...props }: SourceProp) => (
  <ReactMarkdown
    className="markdown-body"
    plugins={[gfm]}
    escapeHtml={false}
    renderers={{
      code: CodeBlock,
    }}
    {...props}
  />
)

export default BaseMarkdown
