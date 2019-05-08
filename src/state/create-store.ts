import { createStore as reduxCreateStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { rootReducer } from './reducer'

const createStore = (initialState = {}) =>
  reduxCreateStore(
    rootReducer,
    initialState,
    devToolsEnhancer({ name: 'RECP' })
  )

export default createStore
