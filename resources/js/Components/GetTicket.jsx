import React, { useState } from 'react';
import AirportCombobox from './AirportCombobox';
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import NumOfPassanger from './NumOfPassanger';
import { IoMdPeople } from "react-icons/io";
import TextField from '@mui/material/TextField';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";


const GetTicket = ({airports}) => {


    const formattedAirports = airports.map((airport) => ({
        name: `${airport.IATA.replace(/\s/g, '')} - ${airport.name.replace('Bandara', '').trim()}`,
        id: airport.id,
        label: `${airport.city.name.replace('KOTA', '').toLowerCase().replace(/(?:^|\s)\S/g, (c) => c.toUpperCase()).trim()}`
    }));

    const [showReturn, setShowReturn] = useState(false);

    const handleButtonClick = () => {
        setShowReturn(!showReturn); // Toggle the value of showInput
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log({
          sourceAirport: document.getElementById('source_airport').value,
          destAirport: document.getElementById('dest_airport').value,
          adultCount: document.getElementById('adultCount').value,
          kidCount: document.getElementById('kidCount').value,
          infantCount: document.getElementById('infantCount').value,
          departureDate: document.getElementById('departure_date').value,
          returnDate: showReturn ? document.getElementById('return_date').value : null,
        });
      };
  return (
    <>
    <form action="">
        <div className='w-[900px] h-[210px] bg-[#ffffff] rounded-[1.3rem] p-6 shadow-lg'>
            <div className='grid grid-rows-2 grid-cols-3 gap-10'>
                <div className='grid'>
                    <div className='flex items-center gap-3'>
                        <FaPlaneDeparture className='text-2xl' />
                        <div className='relative'>
                            <AirportCombobox
                                option={formattedAirports}
                                label="From" id="source_airport" name="source_airport"/>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='flex items-center gap-3'>
                        <FaPlaneArrival className='text-2xl '/>
                        <div className='relative'>
                            <AirportCombobox
                                option={formattedAirports}
                                label="To" id="dest_airport" name="dest_airport"/>
                        </div>
                    </div>
                </div>

                <div className='grid'>
                    <label htmlFor="" className='w-full mx-auto text-xs'> Number of Passenger</label>
                    <div className='flex items-center gap-2'>
                        <IoMdPeople className='text-3xl'/>
                        <NumOfPassanger/>
                    </div>
                </div>
                <div className='grid'>
                    <label htmlFor="" className='text-xs my-1'>Date of Departure</label>
                    <div className='flex items-center gap-4 w-full'>
                        <FaRegCalendarAlt />
                        <TextField id="departure_date"  variant="standard"  type="date" className='w-full'/>
                    </div>
                </div>

                <div className="grid">
                    <div className='flex gap-3'>
                        <input type="checkbox" className='rounded-md' onClick={ handleButtonClick } />
                        <h1 className='text-xs text-slate-300'>Date of Return</h1>
                    </div>
                    {showReturn &&  <div className='flex items-center gap-4'>
                        <FaRegCalendarAlt className=''/>
                        <TextField id="return_date"  variant="standard"  type="date" className='w-full'/>
                    </div>}
                
                </div>

                <div className='grid'>
                <button type="submit" class="text-white bg-[#60cff4] hover:bg-[#60cff4]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-4"
                onClick={handleSubmit}>
                        <FaMagnifyingGlass className='text-lg' />
                        Search Ticket
                </button>
                </div>
            </div>
            
        </div>
    </form>
    </>
  )
}

export default GetTicket;