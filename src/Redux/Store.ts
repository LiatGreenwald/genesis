import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from '../Redux/MovieAppState';
import { filterReducer } from '../Redux/FilterAppState';


const rootReducer = {
    moviesReducer: moviesReducer,
    filterReducer: filterReducer,
};

const store = configureStore({
    reducer: rootReducer,
    
});

export type RootState = ReturnType<typeof store.getState>;



export default store;