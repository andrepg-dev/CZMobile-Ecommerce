'use client';

import { Button } from '@/components/ui/button';
import {
  CircleUserRoundIcon,
  Heart,
  Search,
  ShoppingCartIcon,
} from 'lucide-react';
import { ButtonTooltip } from '../button-tooltip';
import { useAppDispatch } from '@/app/hooks/redux';
import { setToggleCartMenu } from '@/app/store/slice/open-cart-menu';

export const ButtonNavbarShop = () => {
  const dispatch = useAppDispatch();

  const openCartMenu = () => {
    dispatch(setToggleCartMenu());
  };

  return (
    <>
      <ButtonTooltip message={'Buscar'}>
        <Button onClick={() => {}} className='hover:bg-[#121a2d] bg-titulo'>
          <Search size={22} />
        </Button>
      </ButtonTooltip>
      <ButtonTooltip message={'Lista de deseos'}>
        <Button onClick={() => {}} className='hover:bg-[#121a2d] bg-titulo'>
          <Heart size={20} />
        </Button>
      </ButtonTooltip>
      <ButtonTooltip message={'Carrito de compras'}>
        <Button onClick={openCartMenu} className='hover:bg-[#121a2d] bg-titulo'>
          <ShoppingCartIcon size={20} />
        </Button>
      </ButtonTooltip>
      <ButtonTooltip message={'Cuenta'}>
        <Button onClick={() => {}} className='hover:bg-[#121a2d] bg-titulo'>
          <CircleUserRoundIcon size={20} />
        </Button>
      </ButtonTooltip>
    </>
  );
};
