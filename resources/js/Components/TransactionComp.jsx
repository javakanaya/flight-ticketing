import React, { useState } from "react";
import Contact_Detail from "../Components/Contact_Detail";
import Traveller_Detail from "../Components/Traveller";
import { router } from '@inertiajs/react'

const TransactionComp = ({
contactDetailOpen = true,
travDetailOpen = true,
passengerCount,
nationalities,
ticketId,
saveInfo,
}) => {

};

export default TransactionComp;

{
    /* Uncomment this section if you also want to display Contact Details */
}
{
    /* <h1 className="my-5 text-xl font-medium">Contact Details</h1>
                <div className="w-full p-3 font-medium shadow-md border border-slate-300">
                    <Contact_Detail open={contactDetailOpen}/>
                </div> */
}
