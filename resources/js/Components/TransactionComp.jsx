import React, { useState } from "react";
import Contact_Detail from "../Components/Contact_Detail";
import Traveller_Detail from "../Components/Traveller";

const TransactionComp = ({
    contactDetailOpen = true,
    travDetailOpen = true,
    passengerCount,
    nationalities,
    ticketId,
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
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can now access the form data in the `formData` state
        console.log("Form Data:", formData);
        // Perform any additional actions, e.g., send data to the server
    };

    const generateTravellerForms = () => {
        const forms = [];
        for (let i = 0; i < passengerCount; i++) {
            forms.push(
                <div
                    key={i}
                    className="w-full p-3 font-medium shadow-lg border border-slate-300"
                >
                    {/* Step 2: Pass the callback function to update form data */}
                    <Traveller_Detail
                        title={`Adult ${i + 1}`}
                        open={travDetailOpen}
                        nationalities={nationalities}
                        onUpdate={(data) => updateTravellerData(i, data)}
                    />
                </div>
            );
        }
        return forms;
    };

    return (
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
                {generateTravellerForms()}
                <button
                    type="submit"
                    className="my-7 w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8]"
                >
                    Continue
                </button>
            </form>
        </div>
    );
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
