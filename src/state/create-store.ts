import { applyMiddleware, createStore as reduxCreateStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { rootReducer } from './reducer'

export type StoreWithPersistor = Store & {
  persistor?: Persistor
}

const persistConfig = {
  key: 'recp_persisted_store',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const createStore = (initialState = {}): StoreWithPersistor => {
  const composeEnhancers = composeWithDevTools({
    name: 'RECP',
  })

  const store: StoreWithPersistor = reduxCreateStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  )

  // Add the redux persistor to the store
  const persistor: Persistor = persistStore(store)
  if (persistor) {
    store.persistor = persistor
  }

  return store
}
