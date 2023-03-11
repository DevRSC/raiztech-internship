import React from "react";

interface Props {
  currentPage: number;
  maxPage: number;
  paginate: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, maxPage, paginate }: Props) {
  return (
    <div className='mt-6 sm:flex sm:items-center sm:justify-between'>
      <div className='p-1 text-sm text-gray-400 '>
        Page{" "}
        <span className='font-medium text-gray-700 dark:text-gray-100 '>
          {currentPage} of {maxPage}
        </span>
      </div>

      <div className='mt-4 flex items-center gap-x-4 sm:mt-0'>
        <button
          onClick={() => {
            if (currentPage === 1) return;
            paginate(currentPage - 1);
          }}
          type='button'
          className='flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5 rtl:-scale-x-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>

          <span>previous</span>
        </button>

        <button
          type='button'
          onClick={() => {
            if (currentPage === maxPage) return;
            paginate(currentPage + 1);
          }}
          className='flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto'
        >
          <span>Next</span>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-5 w-5 rtl:-scale-x-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
