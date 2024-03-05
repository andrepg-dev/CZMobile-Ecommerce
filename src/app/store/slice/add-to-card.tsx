import { DeviceToBuyWithOutMobileDetails } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AddToCardState extends DeviceToBuyWithOutMobileDetails {
  mount: number;
}

const initialState: Array<AddToCardState> = [];

export const AddToCartSlice = createSlice({
  initialState,
  name: 'AddToCard',
  reducers: {
    // Agregando los valores al carrito de compras
    addToCart(state, action: PayloadAction<AddToCardState>) {
      const { payload } = action;
      const { price, img, title, id, mount } = payload;

      state.push({
        id,
        title,
        price,
        img,
        mount,
      });
    },

    // Eliminando un producto del carrito de compras
    deleteCartProduct(state, action: PayloadAction<string>) {
      const { payload } = action;

      const index = state.findIndex((item) => item.id === payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

    // Limpiando el carrito de compras
    clearCart(state) {
      state.splice(0, state.length);
    },
  },
});

export const { addToCart, deleteCartProduct, clearCart } =
  AddToCartSlice.actions;
