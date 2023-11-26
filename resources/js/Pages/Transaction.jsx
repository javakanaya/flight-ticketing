import Navbar from "../Components/Navbar";
import TransactionComp from "@/Components/TransactionComp";
import "../../css/home.css";
import FlightDetail from "@/Components/FlightDetail";

const Transaction = ({
    source_city,
    source_IATA,
    destination_city,
    destination_IATA,
    duration,
    airline,
    departureTime,
    arrivalTime,
    classtype,
    passengerCount,
    nationality,
    ticketId
}) => {
    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]"></div>
            <div className="pl-[20%] pt-12 w-[60%] absolute">
                <TransactionComp 
                passengerCount={passengerCount}
                nationality={nationality}
                ticketId={ticketId}/>
            </div>

            <div className="p-4 absolute top-[39.5%] left-[63%] w-[350px] border-2 border-slate-200">
                <FlightDetail
                    source_city={source_city}
                    source_IATA={source_IATA}
                    destination_city={destination_city}
                    destination_IATA={destination_IATA}
                    duration={duration}
                    airline={airline}
                    departureTime={departureTime}
                    arrivalTime={arrivalTime}
                    classtype={classtype}
                />
            </div>
        </>
    );
};

export default Transaction;
