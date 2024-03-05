import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const ToogleMenuCart = createSlice({
  name: 'OpenMenuCart',
  initialState,
  reducers: {
    setToggleCartMenu(state) {
      state.open = !state.open;
    },
  },
});

export const { setToggleCartMenu } = ToogleMenuCart.actions;
