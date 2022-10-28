import { configureStore } from '@reduxjs/toolkit'
import RegisterReducer from './Register/Register'
import LoginReducer from './Login/Login'
// import DiaryReducer from './Diary/diary'
import ListDiaryReducer from './DiaryList/diarylist'

export const store = configureStore({
  reducer: {
    register: RegisterReducer,
    list: ListDiaryReducer,
    login: LoginReducer,
    // diary: DiaryReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch