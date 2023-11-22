import Navbar from "../Components/Navbar";
import React, { useState } from 'react';
import "../../css/home.css"
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";
import { Disclosure } from '@headlessui/react'
import Contact_Detail from '../Components/Contact_Detail'
import Traveller_Detail from '../Components/Traveller'


const TransactionComp = ({ contactDetailOpen = true, travDetailOpen = true }) => {

    return (
        <>

            <div className="">
                <h1 className="text-2xl pb-2 font-semibold">Your Booking</h1>
                <p className="font-thin text-sm text-slate-500">Fill in your details and review your bookings</p>
                <br />
                <form action="">

                {/* <h1 className="my-5 text-xl font-medium">Contact Details</h1>
                <div className="w-full p-3 font-medium shadow-md border border-slate-300">
                    <Contact_Detail open={contactDetailOpen}/>
                </div> */}
                <h1 className=" mt-10 mb-3 text-xl font-medium">Traveler Details</h1>
                <div className="w-full p-3 font-medium shadow-lg border border-slate-300">
                    <Traveller_Detail title="Adult 1" open={travDetailOpen} />
                </div>

                <button className="my-7 w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8]">Continue</button>
            </form>
        </div>
       
        </>
    )
}

export default TransactionComp;