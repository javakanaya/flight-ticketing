import React from 'react';
import { Disclosure } from '@headlessui/react';
import { RiArrowDropDownLine } from "react-icons/ri";


const PriceBar = ({ items }) => {
  function formatRupiah(number) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Minimum number of decimal places
    });

    return formatter.format(number);
  }

  const totalPrice = items.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className='w-full p-3 mb-10'>
      <Disclosure>
        <Disclosure.Button className="w-full flex justify-between items-center py-2">
          <h1 className='text-left'>Price you pay</h1>
          <div className='flex items-center'>
            <h1 className='text-right text-xl text-orange-500'>{formatRupiah(totalPrice)}</h1>
            <RiArrowDropDownLine className='text-[#60cff4] text-4xl' />
          </div>
        </Disclosure.Button>
        <hr className='my-2' />
        <Disclosure.Panel className="text-gray-500">
          {items.map((item, index) => (
            <div key={index} className="w-full grid grid-cols-2 py-2 items-center">
              <h1 className='grid text-left'>{item.name}</h1>
              <h1 className='grid text-right text-base'>{formatRupiah(item.price)}</h1>
            </div>
          ))}
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default PriceBar;
