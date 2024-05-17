import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
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
        loginUserFailure: (state) => {
            state.isLoading = false;
            state.loggedIn = false;
            state.user = null;
        },
    }
})


export const { loginUserStart, loginUserSuccess, loginUserFailure } = AuthSlice.actions;
export default AuthSlice.reducer;