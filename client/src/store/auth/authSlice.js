import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated',
    user: {},
    errorMessageAuth: undefined,
  },
  reducers: {
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessageAuth = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessageAuth = payload;
    },

    checkingCredentials: (state) => {
      state.status = 'checking';
      state.user = {};
      state.errorMessageAuth = undefined;
    },

    setErrorMessageAuth: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.errorMessageAuth = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onLogin,
  onLogout,
  checkingCredentials,

  setErrorMessageAuth,
} = authSlice.actions;
