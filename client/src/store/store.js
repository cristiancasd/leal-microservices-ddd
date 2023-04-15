import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { commonSlice } from './common/commonSlice';
import { pointsSlice } from './points/pointsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    common: commonSlice.reducer,
    points: pointsSlice.reducer,
  },
});
