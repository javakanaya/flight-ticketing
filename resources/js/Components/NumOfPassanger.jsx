import React, { useState } from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { IoPerson } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";
import { FaBabyCarriage } from "react-icons/fa"


const NumOfPassenger = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [kidCount, setKidCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleDecrement = (type) => {
    switch (type) {
      case 'adult':
        setAdultCount((adultCount) => Math.max(adultCount - 1, 1));
        break;
      case 'kid':
        setKidCount((kidCount) => Math.max(kidCount - 1, 0));
        break;
      case 'infant':
        setInfantCount((infantCount) => Math.max(infantCount - 1, 0));
        break;
      default:
        break;
    }
  };

  const handleIncrement = (type) => {
    switch (type) {
      case 'adult':
        setAdultCount((adultCount) => adultCount + 1);
        break;
      case 'kid':
        setKidCount((kidCount) => kidCount + 1);
        break;
      case 'infant':
        setInfantCount((infantCount) => infantCount + 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Popover placement='bottom-start'>
        <PopoverHandler>
          <Button className='bg-[#fffff] shadow-none text-black'>
            {adultCount} Adult {kidCount} Kid {infantCount} Infant
          </Button>
        </PopoverHandler>
        <PopoverContent>
          <div className='grid grid-rows-3'>
            <div className='flex w-[200px] text-lg items-center py-2'>
              <IoPerson className='w-[30%]' />
              <h1 className='text-sm w-[50%]'>{adultCount} Adult</h1>
              <button
                className='w-[10%]'
                onClick={() => handleDecrement('adult')}
              >
                -
              </button>
              <button
                className='w-[10%]'
                onClick={() => handleIncrement('adult')}
              >
                +
              </button>
            </div>
            <div className='flex w-[200px] text-lg items-center py-2'>
              <TbMoodKid className='w-[30%]' />
              <h1 className='text-sm w-[50%]'>{kidCount} Kid</h1>
              <button
                className='w-[10%]'
                onClick={() => handleDecrement('kid')}
              >
                -
              </button>
              <button
                className='w-[10%]'
                onClick={() => handleIncrement('kid')}
              >
                +
              </button>
            </div>
            <div className='flex w-[200px] text-lg items-center py-2'>
              <FaBabyCarriage className='w-[30%]' />
              <h1 className='text-sm w-[50%]'>{infantCount} Infant</h1>
              <button
                className='w-[10%]'
                onClick={() => handleDecrement('infant')}
              >
                -
              </button>
              <button
                className='w-[10%]'
                onClick={() => handleIncrement('infant')}
              >
                +
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <input type="hidden" value={adultCount} id="adultCount" name="adultCount"/>
      <input type="hidden" value={kidCount} id="kidCount" name="kidCount"/>
      <input type="hidden" value={infantCount} id="infantCount" name="infantCount"/>
    </>
  );
};

export default NumOfPassenger;
