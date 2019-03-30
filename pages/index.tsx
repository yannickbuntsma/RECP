import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../src/state/reducer'
import { GetCount, getCount } from '../src/state/selectors'
import { decrement, increment } from '../src/state/actions'
import Button from '../src/components/Button'
import client from '../src/cms/contentful-client'

export interface Props {
  count: GetCount
  increment: typeof increment
  decrement: typeof decrement
}

const Home: React.FC<Props> = ({ count, increment, decrement }) => {
  const logData = () => {
    console.log('Logging 🖍')
    client.getEntries().then((entries: any) =>
      entries.items.forEach((entry: any) => {
        if (entry.fields) {
          console.log(entry.fields)
        }
      })
    )
  }

  return (
    <div>
      <p>Welcome to Next.js!</p>
      <p>Count is: {count}</p>
      <Button background="indianred" onClick={decrement}>
        Decrement
      </Button>
      <Button background="green" onClick={increment}>
        Increment
      </Button>
      <Button background="goldenrod" onClick={logData}>
        Log data
      </Button>
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
