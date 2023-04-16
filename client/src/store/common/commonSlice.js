import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    colorTheme: 'black',
    currentProcess: 'Add',
    errorMessage: undefined,
    successMessage: undefined,
    isCommunicating: false,
  },

  reducers: {
    setIsCommunicating: (state, { payload }) => {
      state.isCommunicating = payload;
    },

    setColorTheme: (state, { payload }) => {
      state.colorTheme = payload;
    },
    setCurrentProcess: (state, { payload }) => {
      state.currentProcess = payload;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    setSuccessMessage: (state, { payload }) => {
      state.successMessage = payload;
    },
    clearErrorMessage: (state, { payload }) => {
      state.errorMessage = undefined;
    },
    clearSuccessMessage: (state, { payload }) => {
      state.successMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setColorTheme,
  setCurrentProcess,
  setErrorMessage,
  setSuccessMessage,

  clearErrorMessage,
  clearSuccessMessage,

  setIsCommunicating,
} = commonSlice.actions;
