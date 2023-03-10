import React from "react";

export interface TableProps {
  index: number;
  name: string;
  region: string;
  area: number;
  independent: boolean;
}

export default function TableListItem({
  index,
  name,
  region,
  area,
  independent,
}: TableProps) {
  return (
    <tr key={index}>
      <td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
        <div>
          <h2 className='font-medium text-gray-800 dark:text-white '>
            {index}
          </h2>
        </div>
      </td>
      <td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
        <div className='inline px-3 py-1 text-sm font-normal rounded-full text-white gap-x-2 bg-emerald-300/60 dark:bg-gray-800'>
          {name}
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div>
          <h4 className='text-gray-700 dark:text-gray-200'>{region}</h4>
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <div>
          <h4 className='text-gray-700 dark:text-gray-200'>{area}</h4>
        </div>
      </td>
      <td className='px-4 py-4 text-sm whitespace-nowrap'>
        <p className='text-gray-500 dark:text-gray-400'>{independent}</p>
      </td>
    </tr>
  );
}
