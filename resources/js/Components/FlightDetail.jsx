import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BiSolidPlaneAlt } from 'react-icons/bi';

const FlightDetail = ({
    source_city,
    source_IATA,
    destination_city,
    destination_IATA,
    duration,
    airline,
    departureTime,
    arrivalTime,
    classtype,
}) => {
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <BiSolidPlaneAlt className="text-3xl text-[#60cff4]" />
                <h1 className="font-medium">{`${source_city} → ${destination_city}`}</h1>
                <h1 className="text-sm text-[#60cff4]">Details</h1>
            </div>
            <hr className="mt-5 border-1 border-slate-300" />
            <div className="flex flex-col">
                <div className="mt-5 flex items-center gap-5">
                    <FaRegPaperPlane className="text-lg" />
                    <div>
                        <h1 className="text-[15px] font-semibold">{airline}</h1>
                        <h3 className="text-[13px] text-slate-500">{classtype}</h3>
                    </div>
                </div>
                <div className="relative mt-5 w-[60%] grid grid-cols-3">
                    <div className="grid items-center">
                        <h1>{departureTime}</h1>
                        <h1 className="text-slate-500">{source_IATA}</h1>
                    </div>
                    <h1 className="absolute left-[31.5%] text-[12px] text-slate-500">{duration}</h1>
                    <div className="grid items-center">
                        <div className="w-[12%] h-[15%] border-2 border-slate-400 rounded-full"></div>
                        <hr className="border-2 border-slate-300 w-[40%]" />
                        <div className="w-[12%] h-[15%] bg-slate-400 rounded-full"></div>
                    </div>
                    <h1 className="absolute top-[70%] left-[36%] text-[10px] text-slate-500">Direct</h1>
                    <div className="grid items-center">
                        <h1>{arrivalTime}</h1>
                        <h1 className="text-slate-500">{destination_IATA}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlightDetail;
