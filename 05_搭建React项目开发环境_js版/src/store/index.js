import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import userInfoReducer from './userInfo'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    userInfo: userInfoReducer
  }
})

export default store
