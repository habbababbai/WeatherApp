import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

interface SearchbarState {
    value: string;
}

const initialState: SearchbarState = {
    value: "",
};

export const searchbarSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        changeVal: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { changeVal } = searchbarSlice.actions;

export default searchbarSlice.reducer;
