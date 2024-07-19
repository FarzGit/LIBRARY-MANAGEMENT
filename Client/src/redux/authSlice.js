import { createSlice } from '@reduxjs/toolkit';

const authSlice  = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userId: null,

    },
    reducers: {
        setCredentials: (state, { payload }) => {
            state.token = payload.token;
            state.userId = payload.userId;
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userId', payload.userId);
        },
        clearCredentials: (state) => {
            state.token = null;
            state.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
          },

          

    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;