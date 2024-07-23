import { createAsyncThunk } from "@reduxjs/toolkit";
//axios
import Axios from "../../utils/Axios";
// URLS
import * as URLS from "../../urls";
// --------------------------------------------------

// GET => getSettings
export const getSettings = createAsyncThunk(
    "settings/getSettings",
    async (_, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.get(
                URLS.settingsURL,
                { signal }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

// POST => contactUs
export const contactUs = createAsyncThunk(
    "settings/contactUs",
    async (data, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.post(
                URLS.contactURL,
                data,
                { signal }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);