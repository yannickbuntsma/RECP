import { action, fsa, payload } from 'ts-action'
import { Dispatch } from 'redux'
import client from '../../cms/contentful-client'
import { Recipe } from '../../types'

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

export const testAction = action('TEST_ACTION', fsa<{ name: string }>())

function increment() {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function testAsyncAction() {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment())
    }, 1000)
  }
}

export const fetchRecipes = () => (dispatch: Dispatch) => {
  console.log(`dispatch`, dispatch)
  return client
    .getEntries()
    .then((entries: any) => {
      return entries.items.map((entry: any) => {
        if (entry.fields) {
          return {
            ...entry.fields,
            id: entry.sys.id,
          }
        }
      })
    })
    .then((recipes) => dispatch(fetchRecipesSuccess({ recipes })))
    .catch((error: Error) => dispatch(fetchRecipesFailed({ error })))
}

export const fetchRecipesSuccess = action(
  'FETCH_RECIPES_SUCCESS',
  fsa<{ recipes: Recipe[] }>(),
)

export const fetchRecipesFailed = action(
  'FETCH_RECIPES_FAILED',
  fsa<{ error: Error }>(),
)
