import { configureStore } from '@reduxjs/toolkit';

import authReducer from 'src/reducers/authSlice';

export type RootState = {
  isLoggerdIn: {
    isAuth: boolean;
  };
};

export default configureStore({
  reducer: {
    isLoggerdIn: authReducer,
  },
});
