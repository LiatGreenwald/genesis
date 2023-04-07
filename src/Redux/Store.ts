import { configureStore } from '@reduxjs/toolkit';





const rootReducer = {
    // countryReducer: countryReducer,
    
};


const store = configureStore({
    reducer: rootReducer,
    
});


export type RootState = ReturnType<typeof store.getState>;



export default store;