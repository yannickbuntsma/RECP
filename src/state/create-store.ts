import { createStore as reduxCreateStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { initialState, rootReducer } from './reducer'

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    initialState,
    devToolsEnhancer({ name: 'RECP' })
  )

export default createStore
