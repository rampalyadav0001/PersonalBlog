import React from 'react';
import { useId } from 'react';

const Select = ({ options, label, className, ...props }, ref) => {
  const id = useId;
  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={id} className=''>
          {label}
        </label>
      )}
      <select
        name=''
        id={id}
        {...props}
        ref={ref}
        className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-green-50 duration-200 border border-gray-200 w-full`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);