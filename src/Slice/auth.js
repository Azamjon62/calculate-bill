import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUserStart: (state) => {
            state.isLoading = true;
        },
        loginUserSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedIn = true;
            state.user = action.payload;
        },
        loginUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
            // state.loggedIn = false;
            // state.user = null;
        },
    }
})


export const { loginUserStart, loginUserSuccess, loginUserFailure } = AuthSlice.actions;
export default AuthSlice.reducer;