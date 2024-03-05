'use client';
import { cn } from '@/lib/utils';

export const NavbarAside = ({
  value,
  handleClick,
  children,
  icon,
  fullSize,
}: {
  value: boolean;
  handleClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullSize?: boolean;
}) => {
  return (
    <div
      className={cn(
        'fixed z-50 h-screen w-screen  top-0 transition-all duration-300 ',
        value ? 'left-0' : '-left-[105%]'
      )}
      onClick={handleClick}
    >
      <aside
        className={cn(
          'z-40 h-screen top-0 md:w-72 lg:w-80 xl:w-96',
          fullSize === true ? 'w-[80%]' : 'w-64'
        )}
        aria-label='Sidebar'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900'>
          <div className='mb-10 flex items-center rounded-lg px-3 py-2 text-white border bg-titulo select-none'>
            <img
              alt='Logo page'
              width={25}
              height={25}
              src={'/assets/navbar-logo.png'}
            />
            <div className='flex justify-between ml-3 text-base font-semibold w-full'>
              <span>CZ Mobile</span>
              <span className='flex items-center'>{icon}</span>
            </div>
          </div>
          {children}
          <div className='mt-auto flex'>
            <div className='flex w-full justify-between'>
              <span className='text-sm font-medium text-black dark:text-white'>
                <a
                  href='mailto:motor@stockware.ru'
                  className='hover:border-b  '
                >
                  @info@czmobile.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
