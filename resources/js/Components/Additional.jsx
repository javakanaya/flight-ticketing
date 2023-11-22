import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const Additional = ({ items }) => {
  const { name, desc, features } = items;

  function formatPrice(price) {
    const parts = price.toString().split('.');
    const formattedInteger = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedDecimal = parts[1] ? `.${parts[1].substring(0, 2)}` : '';

    return `Rp ${formattedInteger}${formattedDecimal}/pax`;
    }
  return (
    <div className='mb-5 w-full gap-4 p-3 border-2 border-slate-100 shadow-lg '>
      <div className='flex items-center gap-3'>
        <input type="checkbox" className='border-1 border-slate-300 rounded-md w-[20px] h-[20px]' />
        <h1>{name}</h1>
      </div>
      <h1 className='text-sm mt-2 text-slate-400'>{desc}</h1>
      <hr className='my-2 border-1 border-slate-200' />

      {features && features.map((feature, featureIndex) => (
        <div key={featureIndex} className='my-2 flex items-center'>
          <IoIosCheckmark className='text-3xl text-green-500' />
          <h1 className='text-[13px]'>{feature}</h1>
        </div>
      ))}
      <hr className=''/>
      <div className='text-slate-600 my-2 w-full flex justify-end'>
        <h1>{formatPrice(items.price)}</h1>
      </div>
    </div>
  );
};

export default Additional;
