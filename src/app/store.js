import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;