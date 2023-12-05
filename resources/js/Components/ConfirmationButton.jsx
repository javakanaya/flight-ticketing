// ConfirmationButton.js
import React from "react";
import { Button } from "@material-tailwind/react";
import { router } from '@inertiajs/react'

function ConfirmationButton({ priceBar, travellers, facilities }) {

    const handleSubmit = () => {
        // Make a post request to the server
        router.post(route("bookings.store"), {
            data: {
                priceBar: priceBar,
                travellers: travellers,
                facilities: facilities,
            },
        });
    };

    return (
        <div
            className="flex items-center justify-center text-lg font-bold w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8] hover:cursor-pointer"
            onClick={handleSubmit}
        >
            <h1>Make Transaction</h1>
        </div>
    );
}

export default ConfirmationButton;
