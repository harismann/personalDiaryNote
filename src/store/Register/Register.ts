import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../service/Service';


const service = new Service()
// Register
const generateRegister = (payload: any) => ({
    email: payload?.email,
    username: payload?.username,
    password: payload?.password,
    password_confirmation: payload?.password_confirmation,
})

export interface IRegister {
    email: string;
    username: string;
    password: string;
    password_confirmation: string;
}

export interface registerState {
    registerData: IRegister;
}

const initDataRegister = {
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
}

const initialState: registerState = {
    registerData: initDataRegister
}

export const saveRegister = createAsyncThunk(
    'auth/register',
   async (register: IRegister) => {
        const response = await service.post('auth/register', register)
        return response?.data
   }
)
 
// login


export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        //  saveRegister(state, actions: PayloadAction<string>) {
            // const objPayload = JSON.parse(actions.payload)
            // console.log('json', actions.payload)
            // state = actions.payload
            // const response = service.post('auth/register', actions.payload)

            // console.log('here action payload', response.then(respon => respon.data))
        // }
    },
    extraReducers: (builder)=> {
        builder.addCase(saveRegister.fulfilled, (state, actions)=> {
            state.registerData = generateRegister(actions.payload)
            
        })
    }
})

// export const registerAction = registerSlice.actions
// export const { saveRegister } = registerSlice.actions

export default registerSlice.reducer