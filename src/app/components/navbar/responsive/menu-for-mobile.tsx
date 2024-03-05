'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ShoppingCart } from '@/app/icons';
import { setToggleMenu } from '@/app/store/slice/open-responsive-menu';
import { cn } from '@/lib/utils';
import { Contact, Copyright, Home, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { NavbarAside } from '../../menu/navbar-aside';

interface Props {
  href: string;
  onClick: () => void;
  icon: any;
  text: string;
}

const ListComponent = ({ href, onClick, icon, text }: Props) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700'
        )}
      >
        {icon}
        <span className='ml-3 flex-1 whitespace-nowrap'>{text}</span>
      </Link>
    </li>
  );
};

const list = [
  { href: '/', text: 'Inicio', icon: <Home size={20} /> },
  {
    href: '/shop',
    text: 'Tienda',
    icon: <ShoppingCart />,
  },
  { href: '/contacts', text: 'Contacto', icon: <Contact size={20} /> },
  { href: '/warranty', text: 'Garantía', icon: <Smartphone size={20} /> },
  {
    href: '/certification',
    text: 'Certificación',
    icon: <Copyright size={20} />,
  },
];

export const MenuForMobile = () => {
  const value = useAppSelector((state) => state.toogleMenu.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setToggleMenu());
  };

  return (
    <NavbarAside handleClick={handleClick} value={value}>
      <ul className='space-y-2 text-sm font-medium'>
        {list.map((item, index) => (
          <ListComponent
            onClick={handleClick}
            key={index}
            icon={item.icon}
            text={item.text}
            href={item.href}
          />
        ))}
      </ul>
    </NavbarAside>
  );
};
