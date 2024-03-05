export const CardAddToCart = ({
  img,
  name,
  price,
}: {
  img: string;
  name: string;
  price?: number;
}) => {
  return (
    <div className='flex flex-col rounded overflow-hidden pb-4 border-b font-medium'>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
          <div className='border rounded overflow-hidden'>
            <img width={68} height={68} src={img} alt='Imagen de telefono' />
          </div>
          <div>
            <span>{name}</span>
          </div>
        </div>

        <div className='flex flex-col text-sm justify-between'>
          <span>L. {price && Math.round(price * 29).toLocaleString()} HNL</span>
          <div className='rounded-full border justify-center text-center overflow-hidden flex items-center gap-1'>
            <button className='px-4 p-1 hover:bg-black/20'>-</button>
            <span className='select-none'>1</span>
            <button className='px-4 p-1 hover:bg-black/20'>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
