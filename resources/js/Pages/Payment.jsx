import React, { useState } from "react";
import Transaction from "./Transaction";
import TransactionComp from "@/Components/TransactionComp";
import Navbar from "@/Components/Navbar";
import Additional from "@/Components/Additional";
import FlightDetail from "@/Components/FlightDetail";
import PriceBar from "@/Components/PriceBar";
import Traveller_Detail from "../Components/Traveller";
import AddBaggage from "@/Components/AddBaggage";

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
    contactDetailOpen = false,
    travDetailOpen = false,
    price
}) => {

    function formatRupiah(number) {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Minimum number of decimal places
        })};

    console.log("Price", price);
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
                            traveler = {travellers}
                            passengerCount={passengerCount}
                            />
                    </div>
                    <div className="mt-10">
                        <h1 className="my-5 text-lg font-[1.5rem]">Frequently Added to Booking</h1>
                        <Additional
                            items={{
                                name: "Travel Insurance",
                                desc: "Protection for accidents, trip cancellation, flight delay, and baggage delay",
                                features: [
                                    "Up to Rp 500.000.000 for accidents and other unforeseen events",
                                    "Up to Rp 30.000.000 for trip cancellation (due to specified causes)",
                                    "Up to Rp 7.500.000 for flight and baggage delay"
                                ],
                                price: "100000"
                            }}
                        />
                        <Additional
                            items={{
                                name: "Travel Insurance",
                                desc: "Protection for accidents, trip cancellation, flight delay, and baggage delay",
                                features: [
                                    "Up to Rp 500.000.000 for accidents and other unforeseen events",
                                    "Up to Rp 30.000.000 for trip cancellation (due to specified causes)",
                                    "Up to Rp 7.500.000 for flight and baggage delay"
                                ],
                                price: 100000
                            }}
                        />

                    </div>
                    <div className="mt-14">
                        <h1 className="">Price Details</h1>
                        <PriceBar items={[
                            { name: "Ticket", price: price * passengerCount},
                            { name: "Super Air Jet", price: 1000000 },
                            { name: "Super Air Jet", price: 1000000 }
                        ]}
                        />
                    </div>
                    <button
                            type="submit"
                            className="my-7 w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8]"
                        >
                            Continue
                    </button>
                </form>
            </div>


        </>
    )
};

export default Payment;
