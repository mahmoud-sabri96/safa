// Slice
import { createSlice, current } from "@reduxjs/toolkit";
// Services
import { registerNewClient } from "../services/settings_services";
import { successToast } from "../../utils/toastMessage";
// -----------------------------------------------------------------------

const slice = createSlice({
    name: "settings",
    initialState: {
        clientInfo: {},
        registerIsSucessful: false,
        isLoadingRegisterNewClient: false,
    },

    reducers: {
        setClientInfo: (state, action) => {
            state.clientInfo = { ...current(state)?.clientInfo, ...action?.payload }
        }
    },

    extraReducers: (builder) => {
        // Register New Client
        builder
            .addCase(registerNewClient.fulfilled, (state, action) => {
                state.isLoadingRegisterNewClient = false;
                state.registerIsSucessful = true;
                state.clientInfo = {}
            })
            .addCase(registerNewClient.pending, (state) => {
                state.isLoadingRegisterNewClient = true;
            })
            .addCase(registerNewClient.rejected, (state) => {
                state.isLoadingRegisterNewClient = false;
            });
    },
});

// Reducer
export default slice.reducer;

// Actions
export const {
    setClientInfo
} = slice.actions;