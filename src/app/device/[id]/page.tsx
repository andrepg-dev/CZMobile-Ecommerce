import { ButtonsInteractive } from '@/app/components/sales/buttons';
import { Button } from '@/components/ui/button';
import { MobileDevice } from '@/lib/type';
import Link from 'next/link';
export default async function DevicePage({
  params,
}: {
  params: { id: string };
}) {
  const DataMobile = await getMovileDetails(params.id);

  if (DataMobile == null) return <main className='h-[500px] w-full flex justify-center items-center text-center flex-col gap-1'>
    <p>Lo sentimos, no se encontró la información del dispositivo</p>
    <Link href={"/"} className='underline'>Volver</Link>
  </main>

  return (
    <main className='md:px-medium px-mobile flex flex-col gap-4'>

      <h1 className='text-gris uppercase text-xs font-medium'>
        <Link href={"/"} className='hover:text-[#283346]'>Inicio</Link> {' > '}
        <Link href={"/shop"} className='hover:text-[#283346]'>shop</Link> {' > '}
        <Link href={``} className='hover:text-[#283346]'>{DataMobile.name}</Link>
      </h1>

      <section className='flex gap-10 md:gap-20 md:flex-row flex-col'>
        <div className="flex flex-col gap-6 min-w-max ">
          <h1 className='text-3xl font-bold w-[300px]'>{DataMobile.name}</h1>
          <img src={DataMobile.img} alt={DataMobile.name} width={300} />

          <ButtonsInteractive
           btnVariant={'default'}
            id={"1"}
            title={DataMobile.name}
            price={3000}
            img={""}
          />

        </div>

        <div className="flex flex-col w-full gap-7">
          <h2 className='text-2xl font-bold'>Especificación</h2>

          <table className='w-full bg-gray-100'>
            <tbody className='w-full'>
              {DataMobile.quickSpec.map((spec, index) => (
                <tr key={index} className='border'>
                  <td className='border p-4'>{spec.name}</td>
                  <td className='pl-4'>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  );
}

const getMovileDetails = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items/device/${id}`);
    const data: MobileDevice = await res.json();

    // Solo tomar las propiedades que necesito
    return data;
  } catch (error) {
    return null
  }
};
