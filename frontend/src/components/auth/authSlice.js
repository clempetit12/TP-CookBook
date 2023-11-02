import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const postSetUserSignin = createAsyncThunk(
    "auth/postSetUserSignin",
    async (credentials) => {
        const response = await fetch("http://127.0.0.1:3001", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        console.log(data);

        localStorage.setItem("token", data.idToken)
        return credentials
    })




const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: "Se connecter"
    },
    reducers: {
        logOutAction(state, action) {
            state.user = null
            localStorage.removeItem('token')
          },
        setAuthMode: (state, action) => {
            state.authMode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postSetUserSignin.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(state.user);
        })




    }


})
export const { setAuthMode, logOutAction } = authSlice.actions
export default authSlice.reducer