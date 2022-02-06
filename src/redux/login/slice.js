import { createSlice } from "@reduxjs/toolkit";
import { loginAccount } from "./thunk";
import { storeTokenToLocalStorage, removeToken } from "../../utils";

const initialState = {
    err: "",
    loading: false,
    isLoggedIn: false,
    userAccount: {},
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAccountWithToken: (state, { payload }) => {
            state.isLoggedIn = true;
            state.userAccount = payload;
        },
        logout: (state) => {
            removeToken();
            state.isLoggedIn = false;
            state.userAccount = {};
        }
    },
    extraReducers: {
        [loginAccount.pending]: (state) => {
            state.loading = true;
        },
        [loginAccount.fulfilled]: (state, { payload }) => {
            storeTokenToLocalStorage(payload.user.token);
            state.isLoggedIn = true;
            state.loading = false;
            state.userAccount = payload.user;
        },
        [loginAccount.rejected]: (state, { payload }) => {
            state.err = payload;
            state.loading = false;
        },
    },
});

export const { loginAccountWithToken, logout } = loginSlice.actions

export default loginSlice.reducer;
