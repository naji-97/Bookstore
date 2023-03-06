import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    getStatus: (state) => {
      state.categories = "Under construction";
    },
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
