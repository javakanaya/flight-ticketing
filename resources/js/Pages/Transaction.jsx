import Navbar from "../Components/Navbar";
import TransactionComp from "@/Components/TransactionComp";
import "../../css/home.css";
import FlightDetail from "@/Components/FlightDetail";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import Contact_Detail from "../Components/Contact_Detail";
import Traveller_Detail from "../Components/Traveller";
import { router } from '@inertiajs/react'

const Transaction = ({
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
    contactDetailOpen = true,
    travDetailOpen = true,
    travellers
}) => {


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

    // Step 3: Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
  
        router.get(route("facilities.add"), {
            ticketId: ticketId,
            passengerCount: passengerCount,
            travellers: formData.travellers,
            routeTo: 'Payment'
        });
    };

    const generateTravellerForms = (travellers) => {
        const forms = [];

        // console.log("Save Info", travellers);
        for (let i = 0; i < passengerCount; i++) {
            const traveler = travellers ? travellers[i] : null;
            // console.log(traveler);
            forms.push(
                <div
                    key={i}
                    className="w-full p-3 font-medium shadow-lg border border-slate-300"
                >
                    {/* Step 2: Pass the callback function to update form data */}
                    <Traveller_Detail
                        header={`Adult ${i + 1}`}
                        open={travDetailOpen}
                        nationalities={nationalities}
                        title={traveler ? traveler.title : "Mr"}
                        first_name={traveler ? traveler.first_name : ""}
                        last_name={traveler ? traveler.last_name : ""}
                        nationality={traveler ? traveler.nationality : "1"}
                        ticked={traveler ? traveler.ticked : false}
                        onUpdate={(data) => updateTravellerData(i, data)}
                    />
                </div>
            );
        }
        return forms;
    };
  
    return (
        <>
            <Head title="Booking" />
            <Navbar user={auth.user} />
            <div className=" h-24 bg-[#60cff4]"></div>
            <div className="pl-[20%] pt-12 w-[60%] absolute">
                <div className="">
                    <h1 className="text-2xl pb-2 font-semibold">Your Booking</h1>
                    <p className="font-thin text-sm text-slate-500">
                        Fill in your details and review your bookings
                    </p>
                    <br />
                    {/* Step 3: Add the onSubmit handler to the form */}
                    <form onSubmit={handleSubmit}>
                        <h1 className="mt-10 mb-3 text-xl font-medium">
                            Traveler Details
                        </h1>
                        {generateTravellerForms(travellers)}
                        <button
                            type="submit"
                            className="my-7 w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8]"
                        >
                            Continue
                        </button>
                    </form>
                </div>
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
        </>
    );
};

export default Transaction;
