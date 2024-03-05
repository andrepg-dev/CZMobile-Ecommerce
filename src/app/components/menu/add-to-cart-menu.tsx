'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { setToggleCartMenu } from '@/app/store/slice/open-cart-menu';
import { NavbarAside } from './navbar-aside';
import { CardAddToCart } from './card-add-to-cart';
import { ShoppingCart } from 'lucide-react';

export const AddToCardMenu = () => {
  const value = useAppSelector((state) => state.toogleCartMenu.open);
  const valueOfProductInCart = useAppSelector((state) => state.addToCardSlice);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setToggleCartMenu());
  };

  return (
    <NavbarAside
      value={value}
      handleClick={handleClick}
      fullSize={true}
      icon={<ShoppingCart size={20} />}
    >
      <ul className='pb-[40px] flex flex-col gap-4'>
        {valueOfProductInCart.map((product, index) => (
          <CardAddToCart
            key={index}
            img={product.img}
            name={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </NavbarAside>
  );
};
