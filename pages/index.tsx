import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AppState } from '../src/state/reducer'
import { GetCount, getCount } from '../src/state/selectors'
import { decrement, increment } from '../src/state/actions'
import Button from '../src/components/Elements/Button'
import client from '../src/cms/contentful-client'
import RecipeCard from '../src/components/Recipe/RecipeCard'
import { Recipe } from '../src/types'
import RecipeList from '../src/components/Recipe/RecipeList'

export interface Props {
  count: GetCount
  increment: typeof increment
  decrement: typeof decrement
}

const Home: React.FC<Props> = ({ count, increment, decrement }) => {
  const [data, setData] = useState<Recipe[]>([] as Recipe[])

  const getFields = (): void => {
    client
      .getEntries()
      .then((entries: any) => {
        const recipes = entries.items.map((entry: any) => {
          if (entry.fields) {
            return entry.fields
          }
        })
        console.log('recipes', recipes)
        setData(recipes)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    getFields()
  }, [])

  const logData = () => {
    console.log('Logging 🖍')
    client.getEntries().then((res) => console.log(res))
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
      {data && <RecipeList recipes={data} />}
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
