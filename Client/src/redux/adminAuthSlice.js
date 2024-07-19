import { createSlice } from '@reduxjs/toolkit';

const adminAuthSlice  = createSlice({
    name: 'admin',
    initialState: {
        AdminJwt: null,
        adminId: null,
    },
    reducers: {
        setAdminCredentials: (state, { payload }) => {
            state.AdminJwt = payload.token;
            state.adminId = payload.adminId;
            localStorage.setItem('AdminJwt', payload.token);
            localStorage.setItem('adminId', payload.adminId);
        },
        clearAdminCredentials: (state) => {
            state.AdminJwt = null;
            state.adminId = null;
            localStorage.removeItem('AdminJwt');
            localStorage.removeItem('adminId');
          },



    },
});

export const { setAdminCredentials, clearAdminCredentials } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;