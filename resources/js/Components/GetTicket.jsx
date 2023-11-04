import React from "react";
import "../../css/getTicket.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsPersonAdd, BsPerson } from "react-icons/bs";
import { TbPlaneArrival } from "react-icons/tb";
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { PiBaby } from "react-icons/pi";
import { FaChildReaching } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function GetTicket() {
    const { data, setData, post, processing, errors } = useForm({
        class: 4,
        adult: 1,
        child: 0,
        infant: 0,
    });

    const [showDropdown, setShowDropdown] = useState(false);

    const [isReturn, setIsReturn] = useState(false);

    const handleReturnCheckbox = (e) => {
        setIsReturn(e.target.checked);
    };

    const handleCounter = (type, action) => {
        setData((prevCounts) => {
            const currentValue = prevCounts[type];

            if (action === "add") {
                // Increment the counter
                return {
                    ...prevCounts,
                    [type]: currentValue + 1,
                };
            } else if (action === "subtract") {
                if (type === "adult" && currentValue > 1) {
                    // For "adult" type, decrement only if the current value is greater than 1
                    return {
                        ...prevCounts,
                        [type]: currentValue - 1,
                    };
                } else if (type !== "adult" && currentValue > 0) {
                    // For other types, decrement only if the current value is greater than 0
                    return {
                        ...prevCounts,
                        [type]: currentValue - 1,
                    };
                }
            }

            // If the action is not "add" or "subtract" or the current value doesn't meet the conditions,
            // do not change the state
            return prevCounts;
        });
    };

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setData((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        post("/tickets/search");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="cardDiv grid ">
                    <div className="destinationInput">
                        <label htmlFor="origin">Enter your Origin (id)</label>
                        <div className="input flex">
                            <LiaPlaneDepartureSolid className="icon" />
                            <input
                                id="origin"
                                type="text"
                                placeholder="Enter Origin"
                                value={data.origin}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.origin && (
                            <span className="text-red-500 text-sm">
                                {errors.origin}
                            </span>
                        )}
                    </div>
                    <div className="destinationInput">
                        <label htmlFor="destination">
                            Enter your Destination (id)
                        </label>
                        <div className="input flex">
                            <TbPlaneArrival className="icon" />
                            <input
                                id="destination"
                                type="text"
                                placeholder="Enter Destination"
                                value={data.destination}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.destination && (
                            <span className="text-red-500 text-sm">
                                {errors.destination}
                            </span>
                        )}
                    </div>

                    <div className="destinationInput">
                        <label>No. of Passenger</label>
                        <div className="input flex">
                            <BsPersonAdd className="icon" />
                            <button
                                type="button"
                                className="button-passenger"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {data.adult} Adult, {data.child} Kid,{" "}
                                {data.infant} Toodler
                            </button>
                            {showDropdown && (
                                <div className="dropdown-content">
                                    <div className="dropdown-item">
                                        <BsPerson className="icon" />
                                        <span>{data.adult} Adult</span>
                                        <div className="counterButton">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "adult",
                                                        "subtract"
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "adult",
                                                        "add"
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <FaChildReaching className="icon" />
                                        <span>{data.child} Child</span>
                                        <div className="counterButton">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "child",
                                                        "subtract"
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "child",
                                                        "add"
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <PiBaby className="icon" />
                                        <span>{data.infant} Infant</span>
                                        <div className="counterButton">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "infant",
                                                        "subtract"
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleCounter(
                                                        "infant",
                                                        "add"
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="departure_date">Departure Date</label>
                        <div className="input flex">
                            <AiOutlineCalendar className="icon" />
                            <input
                                type="date"
                                id="departure_date"
                                value={data.departure_date}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.departure_date && (
                            <span className="text-red-500 text-sm">
                                {errors.departure_date}
                            </span>
                        )}
                    </div>

                    {/* Is Pulang Pergi */}
                    {/* <div className="destinationInput">
                        <div className="flex">
                            <label htmlFor="city">Return Date</label>
                            <input
                                type="checkbox"
                                id="myCheckbox"
                                name="myCheckbox"
                                value="checkboxValue"
                                onChange={handleReturnCheckbox}
                                className="appearance-none rounded-md border-2 border-gray-300 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                            />
                        </div>
                        {isReturn && (
                            <div className="input flex">
                                <AiOutlineCalendar className="icon" />
                                <input
                                    type="date"
                                    name="return-date"
                                    id="return-date"
                                />
                            </div>
                        )}
                    </div> */}

                    <div>
                        <label
                            htmlFor="city"
                            className="mx-5 text-sm font-medium"
                        >
                            Class
                        </label>
                        <select
                            className=" focus:outline-none focus:shadow-outline w-10/12 h-9 border-none mx-7 my-1 rounded-3xl text-slate-500"
                            name="class"
                            id="class"
                            value={data.class}
                            onChange={handleChange}
                        >
                            <option value="4" className="hover:bg-sky-400">
                                Economy
                            </option>
                            <option value="3" className="hover:bg-sky-400">
                                Premium Economy
                            </option>
                            <option value="2" className="hover:bg-sky-400">
                                Business
                            </option>
                            <option value="1" className="hover:bg-sky-400">
                                First
                            </option>
                        </select>
                    </div>
                    <div></div>
                    <div></div>

                    <div className="destinationInput">
                        <div className="flex searchDiv">
                            <GoSearch className="icon" />
                            <button
                                type="submit"
                                disabled={processing}
                                className="search-button"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default GetTicket;
