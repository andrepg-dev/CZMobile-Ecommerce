'use client';
import { useAppDispatch } from '@/app/hooks/redux';
import { addToCart } from '@/app/store/slice/add-to-card';
import { setToggleCartMenu } from '@/app/store/slice/open-cart-menu';
import { Button, ButtonProps } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { CheckSquare, Heart, Plus } from 'lucide-react';
import { useState } from 'react';

interface Props {
  btnVariant?: ButtonProps['variant'];
  id: string;
  title: string;
  price: number;
  img: string;
  mount?: number;
}

export const ButtonsInteractive = ({
  id,
  title,
  price,
  img,
  btnVariant,
  mount = 1,
}: Props) => {
  const [wishlist, setWishlist] = useState(false);
  const [cart, setCart] = useState(false);
  const { toast } = useToast();
  const dispatch = useAppDispatch();

  const handleOpenCart = () => {
    dispatch(setToggleCartMenu());
  };

  const handleAddCart = () => {
    if (!cart) {
      toast({
        description: 'Producto agregado correctamente. ',
        action: (
          <ToastAction altText='Try again' onClick={handleOpenCart}>
            Ver carrito
          </ToastAction>
        ),
      });
    }
    setCart(!cart);

    // Agregar a la lista de telefonos comprados
    dispatch(
      addToCart({
        id,
        title,
        price,
        img,
        mount,
      })
    );
  };

  return (
    <div className='flex gap-1'>
      <Button
        className={`text-sm ${cart
          ? `${!btnVariant && 'text-green-500 hover:text-green-500'}`
          : `${!btnVariant && 'text-blue-400 hover:text-blue-400'}`
          } w-full`}
        variant={btnVariant ? btnVariant : 'outline'}
        size={'sm'}
        onClick={() => handleAddCart()}
      >
        {cart ? (
          <div className='flex gap-1 items-center'>
            <CheckSquare width={14} height={14} />
            <span>Added</span>
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            <Plus width={14} height={14} />
            <span>Add to cart</span>
          </div>
        )}
      </Button>
      <Button
        className='text-sm flex items-center gap-1 text-blue-400'
        variant={'outline'}
        size={'sm'}
        onClick={() => setWishlist(!wishlist)}
      >
        <Heart
          width={14}
          height={14}
          className={`text-red-500 ${wishlist && 'fill-red-500 pop-animation'}`}
        />
      </Button>
    </div>
  );
};
