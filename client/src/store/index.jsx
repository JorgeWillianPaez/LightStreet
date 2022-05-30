import { configureStore } from "@reduxjs/toolkit";

// Importing reducers
import userReducer from './modules/userSlice';

const store = configureStore({
    reducer: {
        users: userReducer
    }
});

export default store;