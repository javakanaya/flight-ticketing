import Navbar from "../Components/Navbar";
import "../../css/home.css"

const Transaction = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]"></div>
                <div className="pl-[20%] pt-12 w-[60%] absolute border-2 border-red-600">
                    <h1 className="">Your Booking</h1>
                    <p>Fill in your details and review your bookings</p>
                    <div className="w-full h-20 border-2 border-red-300 mt-5 shadow-lg">
                        <div className="grid grid-cols-3">
                            <div className="col-span-1">

                            </div>
                            <div className="col-span-2 border-2 border-red-500 h-full">
                                
                            </div>
                        </div>
                    </div>
            </div>

           
        </>
    )
}

export default Transaction;