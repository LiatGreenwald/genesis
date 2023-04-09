import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from '../Redux/MovieAppState';




const rootReducer = {
    moviesReducer: moviesReducer,
    
};


const store = configureStore({
    reducer: rootReducer,
    
});


export type RootState = ReturnType<typeof store.getState>;



export default store;