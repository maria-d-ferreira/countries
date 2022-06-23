import { createSlice } from "@reduxjs/toolkit";
import { FavoriteState } from "../types";

const initialState: FavoriteState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const newFav = action.payload;
      const existingFav = state.favorites.find(
        fav => fav.countryCode === newFav.countryCode
      );
      if (!existingFav) {
        state.favorites.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      const countryCode = action.payload;
      state.favorites = state.favorites.filter(
        favorite => favorite.countryCode !== countryCode
      );
    },
  },
});

export const { addFav, removeFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
