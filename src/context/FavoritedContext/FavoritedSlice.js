import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  favorited: [],
};

const FavoritedSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorited?.push(action.payload);
      AsyncStorage.setItem('FavoritedList', JSON.stringify(state.favorited));
    },
    removeFavorite: (state, action) => {
      let findIndex = state.favorited?.findIndex(object => {
        return object.id === action.payload;
      });
      state.favorited?.splice(findIndex, 1);
      AsyncStorage.setItem('FavoritedList', JSON.stringify(state.favorited));
    },
  },
  extraReducers: builder => {
    builder.addCase(FavoritedList.fulfilled, (state, action) => {
      state.favorited = action.payload;
    });
  },
});
export const FavoritedList = createAsyncThunk('FavoritedList', async () => {
  const data = await AsyncStorage.getItem('FavoritedList').then(state =>
    JSON.parse(state),
  );
  console.log('FavoritedList', data);
  return data;
});

export const {addFavorite, removeFavorite} = FavoritedSlice.actions;
export default FavoritedSlice.reducer;
