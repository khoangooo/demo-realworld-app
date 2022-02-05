import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const loginAccount = createAsyncThunk("users/login", async (dataSubmit, thunkAPI) => {
    try {
        const response = await api.loginAccount(dataSubmit);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});
