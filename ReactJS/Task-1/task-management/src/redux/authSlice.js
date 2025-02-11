import { createSlice } from '@reduxjs/toolkit';
import { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../utils/localStorage';

const initialState = {
    user: getFromLocalStorage('user') || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            saveToLocalStorage('user', action.payload);
        },
        logout: (state) => {
            state.user = null;
            removeFromLocalStorage('user');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
