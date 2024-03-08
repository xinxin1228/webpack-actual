import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'web',
  age: 24
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    changeInfo: (state, { payload }) => {
      state.name = payload.name || state.name
      state.age = payload.age || state.age
    }
  }
})

export const { changeInfo } = userInfoSlice.actions
export default userInfoSlice.reducer
