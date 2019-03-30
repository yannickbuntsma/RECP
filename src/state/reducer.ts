import { Action } from 'redux'
import { INCREMENT, DECREMENT } from './actions'

export interface AppState {
  count: number
}

export const initialState: AppState = {
  count: 0,
}

export const rootReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}
