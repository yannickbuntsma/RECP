import styled from '@emotion/styled'

import React from 'react'
import Markdown, { MarkdownOptions } from 'markdown-to-jsx'
import HighlightedIngredient from './components/HighlightedIngredient'

export interface Props {
  className?: string
}

const options: MarkdownOptions = {
  overrides: {
    ingr: HighlightedIngredient,
  },
}

const Instructions: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper>
      <Markdown options={options} className={className}>
        {children as any}
      </Markdown>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  line-height: 1.35;

  li + li {
    margin-top: 1rem;
  }
`

export default Instructions
