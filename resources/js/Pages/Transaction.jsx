import Navbar from "../Components/Navbar";
import React, { useState } from 'react';
import "../../css/home.css"
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaRegPaperPlane } from "react-icons/fa";


const Transaction = ({ auth, laravelVersion, phpVersion }) => {
    const [isDisabled1, setDisabled1] = useState(false);
    const [inputValue1, setInputValue1] = useState();
    const handleCheckboxChange = () =>{
        setDisabled1(!isDisabled1);
        if (!isDisabled1){
            setInputValue1('');
        }
        else{
            setInputValue1();
        }
    };
    const [inputValue2, setInputValue2] = useState('');

    const [isDisabled2, setDisabled2] = useState(false);
    const handleCheckboxChange2 = () =>{
        setDisabled2(!isDisabled2);
        if (!isDisabled2){
            setInputValue2('');
        }
        else{
            setInputValue2();
        }
    };

    
    
    return (
        <>
            <Navbar />
            <div className=" h-24 bg-[#60cff4]">
                
            </div>
            <div className="pl-[20%] pt-12 w-[60%] absolute">
                <h1 className="text-2xl pb-2 font-semibold">Your Booking</h1>
                <p className="font-thin text-sm text-slate-500">Fill in your details and review your bookings</p>
                <br />
                <h1 className="my-5 text-xl font-medium">Contact Details</h1>
                <div className="w-full p-3 font-medium shadow-md border border-slate-300">
                    <h1 className="text-base">Contact Details (for E-ticket/Voucher)</h1>
                    <form action="" className="">
                            <div className="flex">
                                <div className=" py-3 w-1/2 text-sm">
                                <label htmlFor="" className="">
                                        First / Given Name & Middle Name (if any)(ex: Budi Setiawan)<span className="text-red-600">*</span>
                                </label>
                                    <div className="flex-col flex my-3">                                           
                                        <input type="text" name="ctc-first-name" id="ctc-first-name" className="rounded-lg"/>
                                        <span className="text-slate-500 text-xs my-1">(without title and punctuation)</span>
                                    </div>
                                </div>
                                <div className={`py-3 pl-4 w-1/2 text-sm ${isDisabled1 ? 'opacity-50' : ''}`}>
                                    <label htmlFor="">
                                        Family Name / Last Name (ex: Wiryosaputro)<span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex-col flex my-2">
                                        <input type="text" name="ctc-last-name" id="ctc-last-name" className="rounded-lg my-1" readOnly={isDisabled1} value={inputValue1}/>
                                        <span className="text-slate-500 text-xs py-1">(without title and punctuation)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center pl-10 w-full my-6 gap-3">
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" className="" onChange={handleCheckboxChange} checked={isDisabled1} />
                                <h1>This person has no family name / last name</h1>
                            </div>
                            <div className="flex pt-1">
                                <div className="w-1/2">
                                    <label htmlFor="">Mobile Phone<span className="text-red-600">*</span></label>
                                    <div className="flex my-1">
                                            <select id="ctc-mob-pref" name="ctc-mob-pref" className="mr-1 rounded-lg">
                                                +
                                            </select>
                                            <input type="text"  id="ctc-mob" name="ctc-mob" className="rounded-lg"/>
                                    </div>
                                    <span className="text-xs text-slate-500">e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678</span>
                                </div>
                                <div className="pl-4  w-1/2">
                                    <label htmlFor="">
                                        Email<span className="text-red-600">*</span>
                                    </label>
                                    <div className="my-1">
                                        <input type="text" id="ctc-email" name="ctc-email" className="w-full rounded-lg" />
                                        <span className="text-xs text-slate-500">e.g. email@example.com</span>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
                <h1 className=" mt-10 mb-3 text-xl font-medium">Traveler Details</h1>
                <div className="w-full p-3 font-medium shadow-lg border border-slate-300">
                    <h1 className="text-base">Adult 1</h1>
                    <hr  className="my-1 border-1 border-slate-300"/>
                    <form action="" className="">
                        <div className="py-3">
                            <p className=" px-3 text-sm text-yellow-500">Make sure that the passenger's name is exactly as written in the government issued ID/Passport/Driving License. 
Avoid any mistake, because some airlines don't allow name corrections after booking.</p>
                        </div>
                        <div className="flex flex-col py-3">
                            <label htmlFor="" className="">Title<span className="text-red-600">*</span></label>
                            <select name="trav-title" id="trav-title" className="my-2 w-1/3 rounded-lg">
                                <option value="mr">Mr</option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="flex">
                                <div className=" py-3 w-1/2 text-sm">
                                <label htmlFor="" className="">
                                        First / Given Name & Middle Name (if any)(ex: Budi Setiawan)<span className="text-red-600">*</span>
                                </label>
                                    <div className="flex-col flex my-3">                                           
                                        <input type="text" name="trav-first" id="trav-first" className="rounded-lg"/>
                                        <span className="text-slate-500 text-xs my-1">(without title and punctuation)</span>
                                    </div>
                                </div>
                                <div className={`py-3 pl-4 w-1/2 text-sm ${isDisabled2 ? 'opacity-50' : ''}`}>
                                    <label htmlFor="">
                                        Family Name / Last Name (ex: Wiryosaputro)<span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex-col flex my-2">
                                        <input type="text" name="trav-last" id="trav-last" className="rounded-lg my-1" readOnly={isDisabled2} value={inputValue2}/>
                                        <span className="text-slate-500 text-xs py-1">(without title and punctuation)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center pl-10 w-full my-6 gap-3">
                                <input type="checkbox" id="myCheckbox" name="myCheckbox" className="" onChange={handleCheckboxChange2} checked={isDisabled2} />
                                <h1>This person has no family name / last name</h1>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Nationality<span className="text-red-600">*</span></label>
                                <select name="trav-nat" id="trav-nat" className="my-2 w-1/3 rounded-lg"></select>
                            </div>
                    </form>
                </div>
        </div>
        <div className="p-4 absolute top-[39.5%] left-[63%] w-[350px] border-2 border-slate-200">
            <div className="w-full flex items-center justify-between">
                <BiSolidPlaneAlt className="text-3xl text-[#60cff4]"/>
                <h1 className="font-medium">Jakarta → Bali/Denpasar </h1>
                <h1 className="text-sm text-[#60cff4]">Details</h1>
            </div>
            <hr className="mt-5 border-1 border-slate-300"/>
            <div className="flex flex-col">
                <div className="mt-5 flex items-center gap-5">
                    <FaRegPaperPlane className="text-lg"/>
                    <div>
                        <h1 className="text-[15px] font-semibold">Citilink</h1>
                        <h3 className="text-[13px] text-slate-500">Economy</h3>
                    </div>
                </div>
                <div className="relative mt-5 w-[60%]  grid grid-cols-3">
                    <div className=" grid items-center ">
                        <h1>21:00</h1>
                        <h1 className="text-slate-500">CGK</h1>
                    </div>
                    <h1 className="absolute left-[31.5%] text-[12px] text-slate-500">1h 10min</h1>
                    <div className="grid">
                        <div className="items-center flex h-1/">
                            <div class="w-[12%] h-[15%] border-2 border-slate-400 rounded-full"></div>
                            <hr  className="border-2 border-slate-300 w-[40%]"/>
                            <div class="w-[12%] h-[15%] bg-slate-400 rounded-full"></div>
                        </div>
                    </div>
                    <h1 className="absolute top-[70%] left-[36%] text-[10px] text-slate-500">Direct</h1>
                    <div className="grid">
                        <h1>21:00</h1>
                        <h1 className="text-slate-500">CGK</h1>
                    </div>

                </div>
            </div>
        </div>
        
            

            

           
        </>
    )
}

export default Transaction;