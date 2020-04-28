/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import React from 'react'
import Markdown, { MarkdownOptions } from 'markdown-to-jsx'
import HighlightedIngredient from './components/HighlightedIngredient'

export interface Props {
  className?: string
}

const CSS = css`
  padding: 1rem;
  line-height: 1.35;

  li + li {
    margin-top: 1rem;
  }
`

const options: MarkdownOptions = {
  overrides: {
    ingr: HighlightedIngredient,
  },
}

const Instructions: React.FC<Props> = ({ children, className }) => {
  return (
    <div css={CSS}>
      <Markdown options={options} className={className}>
        {children}
      </Markdown>
    </div>
  )
}

export default Instructions
