import React from 'react'
import { Tab } from '@headlessui/react'
import { FaShoppingBag } from "react-icons/fa";
import { Radio, Typography } from "@material-tailwind/react";


const BaggageTab = ({
    source_city,
    source_IATA,
    destination_city,
    destination_IATA,
    traveler,
    passengerCount,
}
) => {

    const generateBaggageCard = (travellers) => {
        const forms = [];

        // console.log("Save Info", travellers);

        const result = []
        for (let i = 0; i < travellers.length; i += 5) {
            const resultObject = {};

            if (travellers[i].title) resultObject.title = travellers[i].title;
            if (travellers[i + 1].first_name) resultObject.first_name = travellers[i + 1].first_name;
            if (travellers[i + 2].last_name) resultObject.last_name = travellers[i + 2].last_name;
            if (travellers[i + 3].nationality) resultObject.nationality = travellers[i + 3].nationality;
            if (travellers[i + 4].ticked) resultObject.ticked = travellers[i + 4].ticked;

            result.push(resultObject);
        }


        for (let i = 0; i < passengerCount; i++) {
            const traveler = result ? result[i] : null;
            console.log(traveler);
            forms.push(
                <div
                    key={i}
                    className="p-3 gap-2"
                >
                    <div className='mt-3 w-full border-2 rounded-md' >
                        <hr className='w-full border-2 rounded-sm border-[#60cff4]' />
                        <div className='p-3'>
                            <h1>Passenger {i + 1} of {passengerCount}</h1>
                            <h1 className='text-semibold'>{traveler.title}. {traveler.first_name} {traveler.last_name}</h1>
                        </div>
                        <hr className='' />
                        <div className='p-3 flex flex-col items-start'>
                            <div className='flex items-center'>
                                <input
                                    type="radio"
                                    id={`extra-baggage-${i}`}  // Using template literals to include the index
                                    name={`fav_language_${i}`}  // Making sure each set of radio buttons has a unique name
        
                                    className='mr-3 w-[]'
                                />
                                <label htmlFor={`extra-baggage-${i}`} className='w-[100%]'>No Baggage Added </label>
                            </div>
                            <div className='flex items-center w-full'>
                                <input
                                    type="radio"
                                    id={`extra-baggage-${i}`}  // Using template literals to include the index
                                    name={`fav_language_${i}`}  // Making sure each set of radio buttons has a unique name
        
                                    className='mr-3 w-[]'
                                />
                                <label htmlFor={`extra-baggage-${i}`} className='w-[100%]'>+ 25 kg</label>
                                <label htmlFor={`extra-baggage-${i}`} className='w-[20%] text-sm'>Rp 445 000</label>
                            </div>
                            <div className='flex items-center w-full'>
                            <input
                                    type="radio"
                                    id={`extra-baggage-${i}`}  // Using template literals to include the index
                                    name={`fav_language_${i}`}  // Making sure each set of radio buttons has a unique name
                                    className='mr-3 w-[]'
                                />
                                <label htmlFor={`extra-baggage-${i}`} className='w-[100%]'>+ 25 kg</label>
                                <label htmlFor={`extra-baggage-${i}`} className='w-[20%] text-sm'>Rp 445 000</label>
                            </div>
                            <div className='flex items-center w-full'>
                            <input
                                    type="radio"
                                    id={`extra-baggage-${i}`}  // Using template literals to include the index
                                    name={`fav_language_${i}`}  // Making sure each set of radio buttons has a unique name
                                    className='mr-3 w-[]'
                                />
                                <label htmlFor={`extra-baggage-${i}`} className='w-[100%]'>+ 25 kg</label>
                                <label htmlFor={`extra-baggage-${i}`} className='w-[20%] text-sm'>Rp 445 000</label>
                            </div>
                            <div className='flex items-center w-full'>
                            <input
                                    type="radio"
                                    id={`extra-baggage-${i}`}  // Using template literals to include the index
                                    name={`fav_language_${i}`}  // Making sure each set of radio buttons has a unique name
                                    className='mr-3 w-[]'
                                />
                                <label htmlFor={`extra-baggage-${i}`} className='w-[100%]'>+ 25 kg</label>
                                <label htmlFor={`extra-baggage-${i}`} className='w-[20%] text-sm'>Rp 445 000</label>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return forms;
    };
    return (
        <Tab.Group>
            <div className='flex'>
                <Tab.List className="w-[50%]">
                    <div className='flex w-full items-center gap-3'>
                        <FaShoppingBag className='text-3xl text-gray-600 w-[10%]' />
                        <h1 className='w-[70%] text-2xl font-semibold'>Baggage</h1>
                        <h1 className='text-[#60cff4] text-sm w-[20%]'>Details</h1>
                    </div>
                    <hr className='mt-3 border-1 border-gray-400' />
                    <div className='mt-3'>
                        <h1 className='text-xl font-medium'>Select Flights</h1>
                        <h1 className='text-md text-gray-400'>Select your extra baggage</h1>
                    </div>
                    <div className="flex flex-col items-start mt-3 gap-3">
                        <Tab className="focus:text-semibold focus:text-[#60cff4] rounded-md" >
                            <h1 className='text-sm text-left'>{source_city} ({source_IATA.trim()}) - {destination_city} ({destination_IATA.trim()})</h1>
                        </Tab>
                    </div>
                </Tab.List>
                <Tab.Panels className="w-full">
                    <Tab.Panel className="p-4">
                        <div className='pl-3'>
                            <h1 className='text-md text-left text-black'>{source_city} ({source_IATA.trim()}) - {destination_city} ({destination_IATA.trim()})</h1>
                        </div>
                        <div className='max-h-[500px] overflow-auto'>
                            {generateBaggageCard(traveler)}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>

            </div>
        </Tab.Group>
    )
}

export default BaggageTab