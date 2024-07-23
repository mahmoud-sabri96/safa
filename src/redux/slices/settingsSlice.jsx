// Slice
import { createSlice } from "@reduxjs/toolkit";
// Services
import { contactUs, getSettings } from "../services/settings_services";
import { successToast } from "../../utils/toastMessage";
// -----------------------------------------------------------------------

const slice = createSlice({
    name: "settings",
    initialState: {
        isLoadingSettings: false,
        settings: {},
        isLoadingContact:false,
    },

    reducers: {
    },

    extraReducers: (builder) => {
        // settings
        builder
            .addCase(getSettings.fulfilled, (state, action) => {
                state.isLoadingSettings = false;
                state.settings = action.payload.data
            })
            .addCase(getSettings.pending, (state) => {
                state.isLoadingSettings = true;
            })
            .addCase(getSettings.rejected, (state) => {
                state.isLoadingSettings = false;
            });

        // Contact us
        builder
            .addCase(contactUs.fulfilled, (state,action) => {
                state.isLoadingContact = false;
                successToast(action?.payload?.message)
            })
            .addCase(contactUs.pending, (state) => {
                state.isLoadingContact = true;
            })
            .addCase(contactUs.rejected, (state) => {
                state.isLoadingContact = false;
            });
    },
});

// Reducer
export default slice.reducer;

// Actions
// export const {
// } = slice.actions;