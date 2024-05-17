/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../Slice/auth'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})