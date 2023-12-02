import React, { useState, Suspense, lazy } from 'react';
import { Link, Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Loading from '@/Components/Loading';

// import "../../css/flights.css";
// import "../../css/getTicket.css";

import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FaPlaneArrival } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Flights = ({
    sourceAirport,
    destinationAirport,
    tickets,
    adultCount,
    kidCount,
    infantCount,
    auth,
}) => {
    // const [value1, setValue1] = useState("");
    // const [value2, setValue2] = useState("");

    // const switchValues = () => {
    //     const temp = value1;
    //     setValue1(value2);
    //     setValue2(temp);
    // };
    // const handleInputChange1 = (e) => {
    //     setValue1(e.target.value);
    // };

    // const handleInputChange2 = (e) => {
    //     setValue2(e.target.value);
    // };
    const TicketCard = lazy(() => import('@/Components/TicketCard'));
    const [selectedClasses, setSelectedClasses] = useState([]);
    const classTypes = {1: 'First', 2: 'Business', 3: 'Premium Economy', 4: 'Economy'};

    const handleClassCheckboxChange = (classType) => {
        setSelectedClasses((prevSelectedClasses) => {
            const classTypeNumber = parseInt(classType, 10);

            if (prevSelectedClasses.includes(classTypeNumber)) {
                return prevSelectedClasses.filter((c) => c !== classTypeNumber);
            } else {
                return [...prevSelectedClasses, classTypeNumber];
            }
        });
    };

    const filteredTickets =
        selectedClasses.length === 0
            ? tickets
            : tickets.filter((ticket) =>
                selectedClasses.includes(ticket.class)
            );

    function formatRupiah(number) {
        const formatter = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, // Minimum number of decimal places
        });

        return formatter.format(number);
    }

    return (
        <>
            <Head title="Flights" />
            {/* <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            /> */}
            <div className="w-full h-24 bg-[#60cff4]">
                <Navbar user={auth.user} />
                {/* <div className="filterbox">
                    <div className="grid grid-rows-3">
                        <div className="grid grid-cols-4 w-[50%] text-xs my-2 ">
                            <div className="flex items-center cursor-default hover:text-slate-400">
                                <p>Rounded Trip</p>
                                <RiArrowDropDownLine className="" />
                            </div>
                            <div className="flex items-center cursor-default hover:text-slate-400">
                                <p>1 Passenger</p>
                                <RiArrowDropDownLine className="" />
                            </div>
                            <div className="flex items-center cursor-default hover:text-slate-400">
                                <p>Economy</p>
                                <RiArrowDropDownLine className="hover:text-slate-400" />
                            </div>
                        </div>
                        <div className="w-full row-span-2 grid gap-3 grid-cols-4 py-2">
                            <input
                                type="text"
                                className="rounded-md "
                                value={sourceAirport.IATA}
                                onChange={handleInputChange1}
                            />
                            <input
                                type="text"
                                className="rounded-md px-5"
                                value={destinationAirport.IATA}
                                onChange={handleInputChange2}
                            />
                            <input
                                type="date"
                                value={tickets[0].departure.split(" ")[0]}
                                className="rounded-md"
                            />
                            <input type="date" className="rounded-md" />
                        </div>
                        <button
                            className="absolute top-[47.5%] left-[24.3%] text-lg p-2 rounded-3xl border border-black bg-white"
                            onClick={switchValues}
                        >
                            <HiOutlineSwitchHorizontal />
                        </button>
                    </div>
                </div> */}
            </div>

            <div className=" w-[60%] h-screen mx-auto mt-[2rem] px-6">
                <div className=" p-2 w-full rounded-md mb-8 shadow-md">
                    <h1>Filter Class</h1>
                    <div className="flex items-center gap-3">
                        {Object.keys(classTypes).map((classType) => (
                            <div key={classType}>
                                <input
                                    type="checkbox"
                                    value={classType}
                                    checked={selectedClasses.includes(parseInt(classType, 10))}
                                    onChange={() => handleClassCheckboxChange(parseInt(classType, 10))}
                                    className='rounded-md focus:bg-[#60cff4]'
                                />
                                <label className="mr-2 ml-1">{classTypes[classType]}</label>
                            </div>
                        ))}
                    </div>

                </div>
                <Suspense fallback={<Loading />}>
                    {filteredTickets.map((ticket) => {
                        const departureTime = ticket.departure.split(" ")[1];
                        const arrivalTime = ticket.arrival.split(" ")[1];
                        return (
                            <TicketCard
                                key={ticket.id}
                                id={ticket.id}
                                adultCount={adultCount}
                                kidCount={kidCount}
                                infantCount={infantCount}
                                departure={departureTime.slice(0, 5)}
                                arrival={arrivalTime.slice(0, 5)}
                                airline={ticket.airline.name}
                                duration={ticket.duration}
                                depAirport={sourceAirport.IATA}
                                arrAirport={destinationAirport.IATA}
                                route="Nonstop"
                                transit="1"
                                facilities = {ticket.facilities}
                                classType={ticket.class}
                                price={formatRupiah(ticket.price)}
                            />
                        );
                    })}
                </Suspense>
            </div>
        </>
    );
};

export default Flights;
