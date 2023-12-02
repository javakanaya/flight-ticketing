import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tab } from '@headlessui/react'
import { FaShoppingBag } from "react-icons/fa";


const AddBaggage = ({
  source_city,
  source_IATA,
  destination_city,
  destination_IATA,
  traveler,
  passengerCount,
  facilities,
  updateSelectedBaggage,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [checkedStatus, setCheckedStatus] = useState([]);


  function formatRupiah(number) {
      const formatter = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
      });

      return formatter.format(number);
  }

  const generateBaggageCard = (travellers) => {
    const forms = [];
    // console.log("Save Info", travellers);

    const result = []
    for (let i = 0; i < travellers.length; i += 6) {
      const resultObject = {};

      if (travellers[i].title) resultObject.title = travellers[i].title;
      if (travellers[i + 1].first_name) resultObject.first_name = travellers[i + 1].first_name;
      if (travellers[i + 2].last_name) resultObject.last_name = travellers[i + 2].last_name;
      if (travellers[i + 3].nationality) resultObject.nationality = travellers[i + 3].nationality;
      if (travellers[i + 4].ticked) resultObject.ticked = travellers[i + 4].ticked;
      if (travellers[i + 5].isAdult) resultObject.isAdult = travellers[i + 5].isAdult;

      result.push(resultObject);
    }

    const baggageOptions = [{ name: "No Baggage Added", price: null }];

    for (let i = 0; i < facilities.length; i += 3) {
      const idObject = facilities[i];
      const nameObject = facilities[i + 1];
      const priceObject = facilities[i + 2];

      if (nameObject && priceObject) {
        const baggageOption = {
          id : idObject.id,
          name: nameObject.name,
          price: priceObject.price
        };

        baggageOptions.push(baggageOption);
      }
    }

    for (let i = 0; i < passengerCount; i++) {
      const traveler = result ? result[i] : null;

      forms.push(
        <div key={i} className="p-3 gap-2">
          <div className='mt-3 w-full border-2 rounded-md' >
            <hr className='w-full border-2 rounded-sm border-[#60cff4]' />
            <div className='p-3'>
              <h1>Passenger {i + 1} of {passengerCount}</h1>
              <h1 className='text-semibold'>{traveler.title}. {traveler.first_name} {traveler.last_name}</h1>
            </div>
            <hr className='' />

            {baggageOptions.map((option, j) => (
              <div key={j} className='p-3 flex flex-col items-start'>
                {baggageOptions && (
                  <div className="flex items-center w-full">
                    <input
                      type="radio"
                      id={`extra-baggage-${i}-${j}`}
                      name={`fav_language_${i}`}
                      className="mr-3 w-[]"
                      checked={checkedStatus[i] === j}
                      onChange={(e) => {
                        // Update the selected baggage information
                        updateSelectedBaggage(i, {
                          id: option.id,
                          name: option.name,
                          price: option.price,
                          isChecked: e.target.checked,
                        });

                        setCheckedStatus((prevCheckedStatus) => {
                          const updatedCheckedStatus = [...prevCheckedStatus];
                          updatedCheckedStatus[i] = e.target.checked ? j : null;
                          return updatedCheckedStatus;
                        });
                      }}
                    />
                    <label htmlFor={`extra-baggage-${i}-${j}`} className="w-[100%]">
                      {option.name}
                    </label>
                    <label htmlFor={`extra-baggage-${i}-${j}`} className="text-right text-sm">
                      {option.price ? formatRupiah(option.price) : ""}
                    </label>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      );
    }

    return forms;
  };


  return (
    <>
      <div className="w-full h-[130px] border-2 p-3" onClick={handleOpen} variant="gradient">
        <h1 className="text-md">Baggage</h1>
        <hr className="mt-2 border-1 border-gray-300" />
        <h1 className="mt-2 text-gray-400">
          Pack your bags! You can bring 20kg baggage per passenger.
        </h1>
      </div>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody className="">
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
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button className="bg-[#60cff4]" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default AddBaggage;