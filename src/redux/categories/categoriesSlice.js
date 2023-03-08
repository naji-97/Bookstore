import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryLists: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, status: 'Under Construction' }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
