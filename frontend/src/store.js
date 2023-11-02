import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./components/auth/authSlice";


export default configureStore({
    reducer : {
        auth: authSlice
    }
})