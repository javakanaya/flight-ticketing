import React, { useState } from "react";
import Transaction from "./Transaction";
import TransactionComp from "@/Components/TransactionComp";
import Navbar from "@/Components/Navbar";
import Additional from "@/Components/Additional";
import FlightDetail from "@/Components/FlightDetail";
import PriceBar from "@/Components/PriceBar";
import Traveller_Detail from "../Components/Traveller";
import AddBaggage from "@/Components/AddBaggage";
import { AddItems } from "@/Components/AddItems";
import ConfirmationButton from "@/Components/ConfirmationButton";

const Payment = ({
    auth,
    source_city,
    source_IATA,
    destination_city,
    destination_IATA,
    duration,
    airline,
    departureTime,
    arrivalTime,
    classtype,
    passengerCount,
    nationalities,
    ticketId,
    travellers,
    adultCount,
    kidCount,
    infantCount,
    contactDetailOpen = false,
    travDetailOpen = false,
    price,
    facilities,
}) => {
    const result = []
    const [selectedBaggage, setSelectedBaggage] = useState([]);
    const [priceBar, setPriceBar] = useState(() => {
        const ticketPrice = price * (+adultCount + +kidCount + +infantCount);
      
        const initialPriceBar = AddItems.map((item) => ({
          name: null,
          price: 0,
        }));

        initialPriceBar.unshift({ id:ticketId, name: "Ticket", price: ticketPrice });
        
        return initialPriceBar;
    });
      
      const updatePriceBar = (index, id, name, price) => {
        setPriceBar((prevPriceBar) => {
          const updatedPrice = [...prevPriceBar];
          updatedPrice[index] = { id: id, name: name, price: parseInt(price, 10)};

          return updatedPrice;
        });
      };
    // Function to update selected baggage
    const updateSelectedBaggage = (index, baggageInfo) => {
        const updatedBaggage = [...selectedBaggage];
        updatedBaggage[index] = baggageInfo;
        setSelectedBaggage(updatedBaggage);
        updatePriceBar(index+(AddItems.length)+1, updatedBaggage[index].id, updatedBaggage[index].name,  updatedBaggage[index].price)
    };
    
    console.log('Facilities', selectedBaggage);
    // console.log('baggage', selectedBaggage);
   

    // console.log("Price", price);
    // Step 1: Maintain state to store form data
    const [formData, setFormData] = useState({
        // Add other fields as needed
        travellers: [],
    });

    // Step 2: Callback function to update form data
    const updateTravellerData = (index, data) => {
        setFormData((prevFormData) => {
            const updatedTravellers = [...prevFormData.travellers];
            updatedTravellers[index] = data;
            return { ...prevFormData, travellers: updatedTravellers };
        });
    };


    const generateTravellerForms = (travellers) => {
        const forms = [];
        // console.log("Save Info", travellers);
        console.log(travellers);
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


        for (let i = 0; i < (+adultCount + +kidCount + +infantCount); i++) {
            const traveler = result ? result[i] : null;
            console.log(traveler);
            forms.push(
                <div
                    key={i}
                    className="w-full p-3 font-medium shadow-lg border border-slate-300"
                >
                    {/* Step 2: Pass the callback function to update form data */}
                    <Traveller_Detail
                        open={travDetailOpen}
                        nationalities={nationalities}
                        title={traveler ? traveler.title : "Mr"}
                        first_name={traveler ? traveler.first_name : ""}
                        last_name={traveler ? traveler.last_name : ""}
                        nationality={traveler ? traveler.nationality : "1"}
                        ticked={traveler ? traveler.ticked : false}
                        adultCount={adultCount}
                        kidCount={kidCount}
                        infantCount={infantCount}
                        onUpdate={(data) => updateTravellerData(i, data)}
                        isAdult={traveler ? traveler.isAdult : false}
                    />
                </div>
            );
        }
        return forms;
    }; 

   

    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]">
            </div>
            <div className="p-4 absolute top-[39.5%] left-[63%] w-[350px] border-2 border-slate-200">
                <FlightDetail
                    source_city={source_city}
                    source_IATA={source_IATA}
                    destination_city={destination_city}
                    destination_IATA={destination_IATA}
                    duration={duration}
                    airline={airline}
                    departureTime={departureTime}
                    arrivalTime={arrivalTime}
                    classtype={classtype}
                />
            </div>
            <div className="pl-[20%] pt-12 w-[60%] absolute">
                <form action="">

                    <div className="">
                        <h1 className="text-2xl pb-2 font-semibold">Your Booking</h1>
                        <p className="font-thin text-sm text-slate-500">
                            Fill in your details and review your bookings
                        </p>
                        <br />
                        {/* Step 3: Add the onSubmit handler to the form */}

                        <h1 className="mt-10 mb-3 text-xl font-medium">
                            Traveler Details
                        </h1>
                        {generateTravellerForms(travellers)}
                    </div>
                    <div className="mt-32 cursor-pointer">
                        <h1 className="text-xl my-3 font-medium">
                            Flight Facilities
                        </h1>
                        <AddBaggage
                            source_IATA={source_IATA}
                            destination_IATA={destination_IATA}
                            source_city={source_city}
                            destination_city={destination_city}
                            traveler={travellers}
                            facilities={facilities}
                            passengerCount={(+adultCount + +kidCount + +infantCount)}
                            updateSelectedBaggage={updateSelectedBaggage}
                        />
                    </div>
                    <div className="mt-10">
                        <h1 className="my-5 text-lg font-[1.5rem]">Frequently Added to Booking</h1>
                        {AddItems.map((addItem, index) => (
                            <Additional
                                key={index}
                                items={addItem.items}
                                updatePriceBar={updatePriceBar}
                                passengerCount={(+adultCount + +kidCount + +infantCount)}
                                length={addItem.length}
                            />
                        ))}
                    </div>
                    <div className="mt-14">
                        <h1 className="">Price Details</h1>
                        <PriceBar items={priceBar}/>
                    </div>
                    <ConfirmationButton
                        priceBar={priceBar}
                        travellers={result}
                        facilities={selectedBaggage}
                    />
                </form>
            </div>


        </>
    )
};

export default Payment;
