import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
}

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload)
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = '';
    },
  },
});

export const selectToken = (state) => state.user.token;

export const { setToken, clearToken } = loginSlice.actions;

export default loginSlice.reducer;
