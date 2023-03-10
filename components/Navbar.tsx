import Image from "next/image";

export default function Navbar() {
  return (
    <div className=' sm:flex sm:items-center sm:justify-between dark:bg-gray-800'>
      <div className='flex flex-row items-center py-3'>
        <Image src='/earth.png' alt='earth' width={50} height={50} />
        <div className='text-xl font-bold text-white px-4'>
          <a href='#'>Country Visualizer</a>
        </div>
      </div>
    </div>
  );
}
