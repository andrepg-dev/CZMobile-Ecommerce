'use client';
import { useFullScreenLogic } from '@/app/hooks/useFullScreenLogic';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DialogContentFullScreen } from '../dialog-content/dialog-content';

export const FullScreenComponent = () => {
  const { fullScreenValues, handleReset } = useFullScreenLogic();
  const [open, setOpen] = useState(false);
  const pahtname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pahtname])

  useEffect(() => {
    setOpen(fullScreenValues.img ? true : false);
  }, [fullScreenValues]);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        handleReset();
      }, 250);
    }
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogClose />
        <DialogContent className='md:min-w-max p-0 md:p-6'>
          <DialogContentFullScreen
            id={fullScreenValues.id}
            title={fullScreenValues.title}
            img={fullScreenValues.img}
            description={fullScreenValues.description}
            deal={{
              memory: fullScreenValues.deal?.memory || '',
              price: fullScreenValues.deal?.price || 0,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
