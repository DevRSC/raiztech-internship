import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" dark:bg-gray-800 sm:flex sm:items-center sm:justify-between">
      <div className="flex flex-row items-center py-3">
        <Image src="/earth.png" alt="earth" width={50} height={50} />
        <div className="px-4 text-xl font-bold text-white">
          <a href="#">Country Visualizer</a>
        </div>
      </div>
    </div>
  );
}
