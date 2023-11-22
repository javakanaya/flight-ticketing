import Navbar from "../Components/Navbar";
import TransactionComp from "@/Components/TransactionComp";
import "../../css/home.css"
import FlightDetail from "@/Components/FlightDetail";

const Transaction = ({}) => {
    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]">
                
            </div>

            <div className="pl-[20%] pt-12 w-[60%] absolute">
                <TransactionComp/>
            </div>

            <div className="p-4 absolute top-[39.5%] left-[63%] w-[350px] border-2 border-slate-200">
                <FlightDetail/>
            </div>
        </>
    )
}

export default Transaction;