import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const ToogleMenuWishList = createSlice({
  name: 'OpenMenuWishList',
  initialState,
  reducers: {
    setToggleMenuWishList(state) {
      state.open = !state.open;
    },
  },
});

export const { setToggleMenuWishList } = ToogleMenuWishList.actions;
