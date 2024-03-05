import Link from "next/link";

export default function ImageDialogContent({ id, alt, src }: { id: string, src: string, alt: string }) {

  return <Link href={`/device/${id}`}>
    <img
      src={src}
      alt={alt}
      width={500}
      height={500}
      className='w-full lg:w-full md:max-h-full h-full object-contain scale-90 hover:scale-95 transition-transform'
    />
  </Link >
}