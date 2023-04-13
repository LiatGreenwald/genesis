import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    filter: string;
}

const initialState: FilterState = {
    
    filter: "",
}
const filterSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        filterMoviesAction(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },

    },
});


export const {
    filterMoviesAction
} = filterSlice.actions;


//Export the reducer
export const filterReducer = filterSlice.reducer;