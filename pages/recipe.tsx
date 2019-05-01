import * as React from 'react'
import { NextContext } from 'next'

export interface Props {
  recipeId: string
}

export default class extends React.Component<Props> {
  static getInitialProps({ query: { id } }: NextContext) {
    return { recipeId: id }
  }

  render() {
    return (
      <div>
        <h1>Recipe with id #{this.props.recipeId}</h1>
      </div>
    )
  }
}
