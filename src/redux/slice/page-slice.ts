import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PageState {
    title?: string;
    withNavbar?: boolean;
    withBottomNav?: boolean;
}

const initialState: PageState = {
    title: "",
    withNavbar: false,
    withBottomNav: false,
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPageState: (state, { payload }: PayloadAction<PageState>) => {
            state.title = payload.title;
            state.withBottomNav = payload.withBottomNav;
        },
    },
});

export const { setPageState } = pageSlice.actions;
export const selectPage = (state: RootState) => state.page;

export default pageSlice.reducer;
