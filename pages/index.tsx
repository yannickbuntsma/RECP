import React, { useEffect, useState } from 'react'
import client from '../src/cms/contentful-client'
import { Recipe } from '../src/types'
import { RecipeList } from '../src/components/Recipe'
import Layout from './_layout'

export type Props = {}

const Home: React.FC<Props> = () => {
  const [data, setData] = useState<Recipe[]>([] as Recipe[])

  const getFields = (): void => {
    client
      .getEntries()
      .then((entries: any) => {
        const recipes = entries.items.map((entry: any) => {
          if (entry.fields) {
            return {
              ...entry.fields,
              id: entry.sys.id,
            }
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

  return <Layout>{data && <RecipeList recipes={data} />}</Layout>
}

export default Home
