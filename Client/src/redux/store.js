import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authSlice from './authSlice'


const Store =  configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        user: authSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default Store