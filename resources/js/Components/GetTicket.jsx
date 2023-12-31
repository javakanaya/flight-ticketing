import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import NumOfPassanger from "./NumOfPassanger";
import { IoMdPeople } from "react-icons/io";
import TextField from "@mui/material/TextField";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Autocomplete from "@mui/material/Autocomplete";
import { router } from '@inertiajs/react'

const GetTicket = ({ airports }) => {
    const formattedAirports = airports.map((airport) => ({
        name: `${airport.IATA.replace(/\s/g, "")} - ${airport.name
            .replace("Bandara", "")
            .trim()}`,
        id: airport.id,
        label: `${airport.city.name
            .replace("KOTA", "")
            .toLowerCase()
            .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase())
            .trim()}`,
    }));

    const [showReturn, setShowReturn] = useState(false);
    const [selectedSourceAirport, setSelectedSourceAirport] = useState(null);
    const [selectedDestAirport, setSelectedDestAirport] = useState(null);

    const handleButtonClick = () => {
        setShowReturn(!showReturn);
    };

    const currentDate = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        const getInputElementValue = (id) => {
            const element = document.getElementById(id);
            return element ? element.value : '';
        };

        console.log({
            sourceAirport: selectedSourceAirport ? selectedSourceAirport.id : null,
            destAirport: selectedDestAirport ? selectedDestAirport.id : null,
            adultCount: getInputElementValue('adultCount'),
            kidCount: getInputElementValue('kidCount'),
            infantCount: getInputElementValue('infantCount'),
            departureDate: getInputElementValue('departure_date'),
            returnDate: showReturn ? getInputElementValue('return_date') : null,
        });

        router.get(route("tickets.search"), {
            sourceAirport: selectedSourceAirport
                ? selectedSourceAirport.id
                : null,
            destAirport: selectedDestAirport ? selectedDestAirport.id : null,
            adultCount: parseInt(document.getElementById("adultCount").value, 10),
            kidCount: parseInt(document.getElementById("kidCount").value, 10),
            infantCount: parseInt(document.getElementById("infantCount").value, 10),
            departureDate: document.getElementById("departure_date").value,
            returnDate: showReturn
                ? document.getElementById("return_date").value
                : null,
        });
    };

    return (
        <>
            <form action="">
                <div className="w-[900px] h-[210px] bg-[#ffffff] rounded-[1.3rem] p-6 shadow-lg">
                    <div className="grid grid-rows-2 grid-cols-3 gap-10">

                        {/* Source Airport */}
                        <div className="grid">
                            <div className="flex items-center gap-3">
                                <FaPlaneDeparture className="text-2xl" />
                                <div className="relative">
                                    <Autocomplete
                                        options={formattedAirports}
                                        getOptionLabel={(option) =>
                                            option.label
                                        }
                                        onChange={(event, newValue) =>
                                            setSelectedSourceAirport(newValue)
                                        }
                                        isOptionEqualToValue={(option, value) =>
                                            option.id === value.id
                                        } // Customize the equality test
                                        sx={{ width: 250 }}
                                        renderOption={(props, option) => (
                                            <div
                                                {...props}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <h1 className="w-full">
                                                    {option.label}
                                                </h1>
                                                <p className="text-xs ">
                                                    {option.name}
                                                </p>
                                            </div>
                                        )}
                                        name="source_airport"
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="From"
                                                id="source_airport"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Dest. Airport */}
                        <div className="grid">
                            <div className="flex items-center gap-3">
                                <FaPlaneArrival className="text-2xl " />
                                <div className="relative">
                                    <Autocomplete
                                        options={formattedAirports}
                                        getOptionLabel={(option) =>
                                            option.label
                                        }
                                        onChange={(event, newValue) =>
                                            setSelectedDestAirport(newValue)
                                        }
                                        isOptionEqualToValue={(option, value) =>
                                            option.id === value.id
                                        } // Customize the equality test
                                        sx={{ width: 250 }}
                                        renderOption={(props, option) => (
                                            <div
                                                {...props}
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <h1 className="w-full">
                                                    {option.label}
                                                </h1>
                                                <p className="text-xs ">
                                                    {option.name}
                                                </p>
                                            </div>
                                        )}
                                        name="dest_airport"
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="To"
                                                id="dest_airport"
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Passengers Count */}
                        <div className="grid">
                            <label
                                htmlFor=""
                                className="w-full mx-auto text-xs"
                            >
                                {" "}
                                Number of Passenger
                            </label>
                            <div className="flex items-center gap-2">
                                <IoMdPeople className="text-3xl" />
                                <NumOfPassanger />
                            </div>
                        </div>

                        {/* Departure Date  */}
                        <div className="grid">
                            <label htmlFor="" className="text-xs my-1">
                                Date of Departure
                            </label>
                            <div className="flex items-center gap-4 w-full">
                                <FaRegCalendarAlt />
                                <TextField
                                    id="departure_date"
                                    variant="standard"
                                    type="date"
                                    className="w-full"
                                    defaultValue={currentDate}
                                />
                            </div>
                        </div>

                        {/* Return Date */}
                        <div className="grid">
                            <div className="flex gap-3">
                                {/* <input hidd
                                    type="checkbox"
                                    className="rounded-md text-[#60cff4]"
                                    onClick={handleButtonClick}
                                />
                                <h1 className="text-xs text-slate-300">
                                    Date of Return
                                </h1> */}
                            </div>
                            {showReturn && (
                                <div className="flex items-center gap-4">
                                    <FaRegCalendarAlt className="" />
                                    <TextField
                                        id="return_date"
                                        variant="standard"
                                        type="date"
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Search Ticket */}
                        <div className="grid">
                            <button
                                type="submit"
                                className="text-white bg-[#60cff4] hover:bg-[#60cff4]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 gap-4"
                                onClick={handleSubmit}
                            >
                                <FaMagnifyingGlass className="text-lg" />
                                Search Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default GetTicket;


