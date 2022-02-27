import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Profile from "../../models/Profile";
import { RootState } from "../store";

export interface ProfileState {
    profile: Profile;
}

const initialState: ProfileState = {
    profile: {
        name: "",
        email: "",
        city: "",
        address: "",
    },
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        saveProfile: (state, { payload }: PayloadAction<Profile>) => {
            state.profile = payload;
            localStorage.setItem("profile", JSON.stringify(payload));
            
        },
        loadProfile: (state) => {
            const profile: Profile = JSON.parse(localStorage.getItem("profile") ?? "");
            state.profile = profile;
        },
    },
});

export const { saveProfile, loadProfile } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
