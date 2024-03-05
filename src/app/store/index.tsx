import { configureStore } from '@reduxjs/toolkit';
import { AddToCartSlice } from './slice/add-to-card';
import { FullScreenDeviceSlice } from './slice/full-screen-selected-device';
import { ToogleMenuCart } from './slice/open-cart-menu';
import { ToogleMenu } from './slice/open-responsive-menu';
import { ToogleMenuWishList } from './slice/open-wishlist-menu';

export const store = configureStore({
  reducer: {
    // Menu values
    toogleMenu: ToogleMenu.reducer,
    toogleCartMenu: ToogleMenuCart.reducer,
    ToogleMenuWishList: ToogleMenuWishList.reducer,
    // Devices values
    addFullScreen: FullScreenDeviceSlice.reducer,
    addToCardSlice: AddToCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
