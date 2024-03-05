'use client'
import { useAppDispatch } from "@/app/hooks/redux";
import { addFullScreen } from "@/app/store/slice/full-screen-selected-device";

interface Props {
  id: string;
  img: string;
  title: string;
  description: string;
  deal: { memory?: string; price?: number };
}

export default function ImageCardSales({ img, title, description, deal, id }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addFullScreen({ img, title, description, deal, id }));
  };

  return <img
    alt={`${title} image`}
    src={img}
    width={280}
    height={280}
    className='h-[240px] object-contain group-hover:scale-105 transition-transform aspect-square cursor-pointer'
    onClick={handleClick}
  />

}