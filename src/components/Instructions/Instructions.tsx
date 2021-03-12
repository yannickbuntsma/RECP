import React from 'react'
import Markdown from 'markdown-to-jsx'
import HighlightedIngredient from './components/HighlightedIngredient'

export interface Props {
  className?: string
}

// const CSS = css`
//   padding: 1rem;
//   line-height: 1.35;

//   li + li {
//     margin-top: 1rem;
//   }
// `

const options = {
  overrides: {
    ingr: HighlightedIngredient,
  },
}

const Instructions: React.FC<Props> = ({ children, className }) => {
  // TODO: Issue with Markdown package
  if (typeof children !== 'string') {
    return
  }

  return (
    <div >
      <Markdown options={options} className={className}>
        {children}
      </Markdown>
    </div>
  )
}

export default Instructions
