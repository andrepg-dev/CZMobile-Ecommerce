import Link from "next/link";

export const RouterShop = () => {
  return (
    <header className='w-full h-14 flex items-center border-b md:px-medium px-mobile uppercase text-[13px] gap-2 tracking-wide font-medium'>
      <Link href={"/"}>Inicio</Link>
      <div className='text-grisText flex gap-2'>
        <span>/</span>
        <Link href={"/shop"}>Shop</Link>
      </div>
    </header>
  );
};
