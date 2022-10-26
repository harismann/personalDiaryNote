import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Service from '../../service/Service';

const service = new Service();

interface Ilogin {
    email: string;
    password: string;
    tokenUser: string;
    loading: boolean;
}

interface loginState {
    loginData: Ilogin;
}

const initDataLogin = {
    email: "",
    password: "",
    tokenUser: "",
    loading: false,
}

const initialState: loginState = {
    loginData: initDataLogin,
}


export const saveLogin = createAsyncThunk(
    'auth/login', 
    async(login: Ilogin) => {
        const response = await service.post('auth/login', login)
        console.log('masuk k login reducer', response?.data.user);
        if(response?.status === 200){
            const token = JSON.stringify(response?.data.access_token);
            localStorage.setItem('userToken',token) 
            // localStorage.setItem('username', response?.data.user.username)
        }
        return response?.data
    }   
)





export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(saveLogin.fulfilled, (state, actions)=> {
            state.loginData.email = actions.payload.user.email
            state.loginData.password = actions.payload.user.password
        });
        builder.addCase(saveLogin.pending, (state)=> {
            state.loginData.loading = true
        });
        builder.addCase(saveLogin.rejected, (state)=> {

        })
    }
})

export default loginSlice.reducer