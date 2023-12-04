import { PiAirplaneInFlightDuotone } from "react-icons/pi";
import "../../css/default.css";
import { router } from '@inertiajs/react'

function TicketCard(props) {
    const handleChoose = () => {
            router.visit("/booking", {
            data: {
                ticketId: props.id,
                adultCount : props.adultCount,
                kidCount : props.kidCount,
                infantCount : props.infantCount,
                facilities :  props.facilities,
                routeTo : "Transaction",
            },
        });
    };

    const  classTypes = {1 : 'First', 2 :'Business', 3: 'Premium Economy', 4: 'Economy'};
    return (
        <>
            <div className="w-full grid gap-3 grid-rows-1 grid-cols-8 py-5">
                <div className="grid col-span-2 ">
                    <div className="grid grid-cols-3 items-center ">
                        <PiAirplaneInFlightDuotone className="w-[100%] grid text-5xl " />
                        <div className="grid grid-rows-2 col-span-2">
                            <p className="grid ">
                                {props.departure} - {props.arrival}
                            </p>
                            <p className="grid  text-slate-500 text-sm">
                                {props.airline}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid ">
                    <div className="grid grid-rows-2">
                        <div className="grid">{props.duration}</div>
                        <div className="grid text-sm text-slate-800">
                            {props.depAirport} - {props.arrAirport}
                        </div>
                    </div>
                </div>
                <div className="grid  col-span-2">
                    <div className="grid grid-cols-2">
                        <div className="grid "></div>
                        <div className="grid ">
                            <div className="grid items-center">
                                <div className="grid text-sm">
                                    {props.route}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="items-center col-span-2 grid ">
                    {props.price}
                </div>
                <div className="flex  items-center mx-auto text-sm">
                    <button
                        className="button bg-blue-color text-white py-3 px-3 rounded-3xl"
                        onClick={handleChoose}
                    >
                        Choose
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 w-[50%] text-slate-700 mb-2">
                <div className="grid text-sm hover:txt-blue-color cursor-pointer">
                    {classTypes[props.classType]} Class
                </div>
            </div>
            <hr className="border-solid-border-t-4 border-gray-300 rounded-sm" />
        </>
    );
}

export default TicketCard;
