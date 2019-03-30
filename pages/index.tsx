import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../state/reducer'
import { GetCount, getCount } from '../state/selectors'
import { decrement, increment } from '../state/actions'

export interface Props {
  count: GetCount
  increment: typeof increment
  decrement: typeof decrement
}

const Home: React.FC<Props> = ({ count, increment, decrement }) => {
  console.log('count', count)
  return (
    <div>
      <p>Welcome to Next.js!</p>
      <p>Count is: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  count: getCount(state),
})

const mapDispatchToProps = {
  increment,
  decrement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
