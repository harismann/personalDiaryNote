import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../service/Service';

const service = new Service()

interface Idiary {
    title: string;
    content: string;
}

interface diaryState {
    diaryData: Idiary;
}

const initDataDiary = {
    title: "",
    content: "",
}

const initialState: diaryState = {
    diaryData: initDataDiary
}

export const createDiary = createAsyncThunk(
    'diary',
    async(diary: Idiary) => {
        const response = await service.post('diary', diary)
        console.log('respon')
        return response?.data
    }
)


export const createDiarySlice = createSlice({
    name: 'create',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(createDiary.fulfilled, (state, actions)=> {
            state.diaryData = actions.payload
        })
    }
})


export default createDiarySlice.reducer