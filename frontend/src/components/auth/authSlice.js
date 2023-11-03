import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export const postSetUserSignin = createAsyncThunk(
    "auth/postSetUserSignin",
    async ({ login, password }) => {
        console.log(login);
console.log(password);
        const base64Credentials = btoa(`${login}:${password}`); 
        console.log(base64Credentials);

        const response = await fetch("http://127.0.0.1:3001/authenticate", {
            method: "POST",
            headers: {
                "Authorization": `Basic ${base64Credentials}`
               
            }
   
        })
        console.log(response.status);
        if (response.status === 200) {
            localStorage.setItem("user", base64Credentials); 
            // Authentification réussie
            const data = await response.json();
            console.log(data);
            localStorage.setItem("user", data); 
            setAuthMode("authentifié")
            return base64Credentials;
          } else {
            // Gérer les erreurs d'authentification
            alert("mauvaise authentification")
            setAuthMode("s'authentifier")
            throw new Error("Authentification échouée");
          }
        
    })




const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        authMode: "S'authentifier"
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
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
export const { setAuthMode, logOutAction, setUser } = authSlice.actions
export default authSlice.reducer