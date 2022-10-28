import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { useId } from 'react'
import Diary from '../../components/atoms/Diary/Diary';
import Service from '../../service/Service';

const service = new Service()

const generateDataList = (payload: any) => ({
    id: payload?.id,
    titile: payload?.title,
    content: payload?.content,
    created_at: payload?.created_at

})

interface Ilistdiary {
    id: string,
    title: string,
    content: string,
    created_at: string,
}

interface Idiary {
    title: string;
    content: string;
}

interface diaryState {
    diaryList: Ilistdiary;
    listArr: Array<Ilistdiary>;
    listArrFiltered: Array<Ilistdiary>;
    diaryData: Idiary
}

const initDataDiary = {
    title: "",
    content: "",
}

const initListDiary = {
    id: "",
    title: "",
    content: "",
    created_at: ""
}

const initialState: diaryState = {
    diaryList: initListDiary,
    listArr: [],
    listArrFiltered: [],
    diaryData: initDataDiary
    
}
const generateUuidv4 = () => {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if( j ===8 || j === 12 || j === 16 || j === 20)
        result = result + '-';
      i = Math.floor(Math.random()*16).toString(16).toUpperCase();
      result = result + i;
    }
    return result;
  }

export const listDiary = createAsyncThunk(
    'diary/list',
    async()=> {
        const response = await service.getAll('diary')
        return response
    }
)

export const getDiary = createAsyncThunk(
    'diary/diary_id',
    async(diaryID: string| undefined) => {
        const response = await service.getAll(`diary/${diaryID}`)
        console.log('diary list', response)
        return response
    }
)

export const createDiary = createAsyncThunk(
    'diary/create',
    async(diary: Idiary) => {
        // const id = useId()
        const response = await service.post('diary', diary)
        console.log('respon', response?.data)
        // return response
        return {
            ...diary,
            created_at: new Date().toLocaleDateString(),
            id: generateUuidv4()
        }
    }
)

export const getDiarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        search: (state, action)=> {
            console.log('state filter', state.listArrFiltered, action)
            console.log('state non', state.listArr)
            state.listArrFiltered = !!action.payload ? state.listArrFiltered.filter((data)=> {
                return data.title?.toUpperCase().includes(action.payload?.toUpperCase())
            }) : state.listArr
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(listDiary.fulfilled, (state, action)=> {
            state.listArr = action.payload
            state.listArrFiltered = action.payload
        })
        builder.addCase(getDiary.fulfilled, (state, action)=> {
            state.diaryList = action.payload
        })
        builder.addCase(createDiary.fulfilled, (state, actions)=> {
            state.diaryData = actions.payload
            // JSON.parse(actions.payload)
            
            console.log(typeof actions.payload, 'payload he')
            // actions.payload.id = actions.payload.id + new Date().toString()
            state.listArr.unshift(actions.payload)
            state.listArrFiltered.unshift(actions.payload)
        })
    }
})

export const {search} = getDiarySlice.actions
export default getDiarySlice.reducer