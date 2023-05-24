import { configureStore } from '@reduxjs/toolkit'
import AddEventReducer from '../slice/AddEvent'

export const store = configureStore({
  reducer: AddEventReducer,
})