import { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  getFilteredRegion: (region: string) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const regions = [
  "Asia",
  "Europe",
  "Africa",
  "Oceania",
  "Americas",
  "Polar",
  "Antarctic Ocean",
];

export default function Dropdown({ getFilteredRegion }: Props) {
  const filterButton = (region: string) => {
    getFilteredRegion(region);
  };

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full px-5 justify-center gap-x-1.5 rounded-md  text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'>
          Regions
          <ChevronDownIcon
            className='-mr-1 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {regions.map((region) => (
              <Menu.Item key={region}>
                {({ active }) => (
                  <button
                    onClick={() => filterButton(region)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-white",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {region}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}