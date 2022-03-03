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
        setProfile: (state) => {
            const profile: Profile = {
                name: "John Smith",
                email: "john@email.com",
                address: "",
                city: "",
            };
            state.profile = profile
            localStorage.setItem("profile", JSON.stringify(profile));
        },
        saveProfile: (state, { payload }: PayloadAction<Profile>) => {
            state.profile = payload;
            localStorage.setItem("profile", JSON.stringify(payload));
        },
        loadProfile: (state) => {
            const profileJson = localStorage.getItem("profile");
            if (profileJson == null) return;
            const profile: Profile = JSON.parse(profileJson);
            state.profile = profile;
        },
        logout: (state) => {
            localStorage.removeItem("profile");
            state.profile = initialState.profile;
        },
    },
});

export const { setProfile, saveProfile, loadProfile, logout } = profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile;

export default profileSlice.reducer;
