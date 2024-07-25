import { createAsyncThunk } from "@reduxjs/toolkit";
//axios
import Axios from "../../utils/Axios";
// URLS
import * as URLS from "../../urls";
// --------------------------------------------------

// POST => registerNewClient
export const registerNewClient = createAsyncThunk(
    "settings/registerNewClient",
    async (data, thunkAPI) => {
        const { signal } = thunkAPI
        try {
            const response = await Axios.post(
                URLS.regeisterNewClientURL,
                data,
                { signal }
            );
            return response;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);