import { configureStore } from '@reduxjs/toolkit'
import UserInfoReducer from './features/userInfo'
import CounterReducer from './features/counter'

// 导出store
const store = configureStore({
  reducer: {
    userInfo: UserInfoReducer,
    counter: CounterReducer
  }
})
export default store

export type StoreTypes = ReturnType<typeof store.getState>
// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof store.dispatch
