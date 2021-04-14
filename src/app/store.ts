import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'src/reducers/authSlice';

export default configureStore({
  reducer: {
    isLoggerdIn: authReducer,
  },
});
