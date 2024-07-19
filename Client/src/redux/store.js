import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apiSlice'
import authSlice from './authSlice'
import adminAuthSlice from './adminAuthSlice'

const Store =  configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        user: authSlice,
        admin:adminAuthSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default Store