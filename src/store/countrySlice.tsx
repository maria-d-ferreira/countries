import { createSlice } from "@reduxjs/toolkit";
import { CountryState } from "../types";

const initialState: CountryState = {
  countries: [],
};

export const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getCountries: (state, action) => {
      state.countries = action.payload;
    },
  },
});

export const { getCountries } = countrySlice.actions;

export default countrySlice.reducer;
