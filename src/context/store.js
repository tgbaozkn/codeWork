import {configureStore} from '@reduxjs/toolkit';
import FavoritedSlice from './FavoritedContext/FavoritedSlice';

export default configureStore({
  reducer: {
    favoritedJobs: FavoritedSlice,
  },
});
