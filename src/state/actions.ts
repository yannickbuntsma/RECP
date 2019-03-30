export const INCREMENT = 'root/INCREMENT'
export const DECREMENT = 'root/DECREMENT'

export interface Increment {
  type: typeof INCREMENT
}

export interface Decrement {
  type: typeof DECREMENT
}

export const increment = (): Increment => ({
  type: INCREMENT,
})

export const decrement = (): Decrement => ({
  type: DECREMENT,
})
