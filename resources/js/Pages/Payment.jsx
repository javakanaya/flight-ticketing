import React, { useState } from "react";
import Transaction from "./Transaction";
import TransactionComp from "@/Components/TransactionComp";
import Navbar from "@/Components/Navbar";
import Additional from "@/Components/Additional";
import FlightDetail from "@/Components/FlightDetail";
import PriceBar from "@/Components/PriceBar";

const Payment = ({ }) => {
    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]">
                
            </div>
            <div className="p-4 absolute top-[39.5%] left-[63%] w-[350px] border-2 border-slate-200">
                <FlightDetail/>
            </div>
            <div className="pl-[20%] pt-12 w-[60%] absolute">
            <TransactionComp contactDetailOpen={false} travDetailOpen={false}/>
            <div className="mt-36">
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
                    price: "1000000"
                }}
                />

            </div>
            <div className="mt-14">
                <h1 className="">Price Details</h1>
                <PriceBar   items={[
                    { name: "Super Air Jet", price: 1000000 },
                    { name: "Super Air Jet", price: 1000000 }
                ]}
                />
            </div>
        </div>


        </>
    ) 
};

export default Payment;
