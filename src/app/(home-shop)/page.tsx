import Link from 'next/link';
import Catalogue from '../components/catalog';
import { Sales } from '../components/sales/sales';
import { Messenger } from '../icons';

export default async function Home() {
  return (
    <main className='flex flex-col gap-10 pt-10 md:px-medium px-mobile'>
      <Sales />
      <hr className='border-borderDefault ' />
      <Catalogue />

      <Link href={'https://www.facebook.com/CZmobilehn/'} target='_blank' className="fixed right-6 bottom-6 p-3 flex items-center justify-center rounded-full bg-[#0a7cff] cursor-pointer">
        <Messenger width={35} height={35} />
      </Link>

    </main>
  );
}
