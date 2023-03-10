import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface Props {
  search: string;
  viewAll: () => void;
  filterData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  getFilteredRegion: (region: string) => void;
}

export default function SearchFilter({
  search,
  viewAll,
  filterData,
  filterButton,
  getFilteredRegion,
}: Props) {
  return (
    <>
      <div className='mt-6 md:flex md:items-center md:justify-between'>
        <div className=' bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700'>
          <button
            onClick={() => {
              viewAll();
            }}
            className='px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            View all
          </button>

          <button
            onClick={filterButton}
            className='px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100'
          >
            Filter by smaller area
          </button>

          <Dropdown getFilteredRegion={getFilteredRegion} />
        </div>

        <div className='relative flex items-center mt-4 md:mt-0'>
          <span className='absolute'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-5 h-5 mx-3 text-gray-400 dark:text-gray-600'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </span>

          <input
            type='text'
            placeholder='Search'
            value={search}
            onChange={filterData}
            className='block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
          />
        </div>
      </div>
    </>
  );
}
