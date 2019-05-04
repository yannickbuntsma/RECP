import { Entry } from 'contentful'
import client from './contentful-client'
import { Recipe } from '../types'

const getRecipe = (id: string): Promise<Entry<Recipe>> => client.getEntry(id)

export default getRecipe
