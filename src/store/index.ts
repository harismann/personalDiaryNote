import { configureStore } from '@reduxjs/toolkit'
import RegisterReducer from './Register/Register'
import LoginReducer from './Login/Login'
import DiaryReducer from './Diary/diary'

export const store = configureStore({
  reducer: {
    register: RegisterReducer,
    login: LoginReducer,
    diary: DiaryReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch