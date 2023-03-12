import React, { useState } from "react";
import Dropdown from "./Dropdown";

interface Props {
  search: string;
  viewAll: () => void;
  filterData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  getFilteredRegion: (region: string) => void;
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
        <div className=' divide-x rounded-lg border bg-white rtl:flex-row-reverse dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900'>
          <button
            onClick={() => {
              viewAll();
            }}
            className='px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 sm:text-sm'
          >
            View all
          </button>

          <button
            onClick={filterButton}
            className='px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 sm:text-sm'
          >
            Filter by smaller area
          </button>

          <Dropdown getFilteredRegion={getFilteredRegion} regions={regions} />
        </div>

        <div className='relative mt-4 flex items-center md:mt-0'>
          <span className='absolute'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='mx-3 h-5 w-5 text-gray-400 dark:text-gray-600'
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
            className='block w-full rounded-lg border border-gray-200 bg-white py-1.5 pr-5 pl-11 text-gray-700 placeholder-gray-400/70 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 rtl:pr-11 rtl:pl-5 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 md:w-80'
          />
        </div>
      </div>
    </>
  );
}
