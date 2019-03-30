import { AppState } from './reducer'

export const getCount = (state: AppState): number => state.count
export type GetCount = ReturnType<typeof getCount>
