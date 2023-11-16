import { configureStore } from '@reduxjs/toolkit';
import useReducer from '../features/user/userSlice';
import movieReducer from '../features/movie/movieSlice';

const store = configureStore({
  reducer: {
    user: useReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;