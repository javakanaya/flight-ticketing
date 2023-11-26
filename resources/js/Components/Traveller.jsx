import PaymentMethod from "./PaymentMethod";
import Navbar from "@/Components/Navbar";
import { Disclosure } from "@headlessui/react";
import React, { useState } from "react";

const Traveller_Detail = ({ title, open, nationality }) => {
    const [lastnameDisabled, setlastnameDisabled] = useState(false);
    const [lastnameValue, setlastnameValue] = useState();
    const handleCheckboxChange = () => {
        setlastnameDisabled(!lastnameDisabled);
        if (!lastnameDisabled) {
            setlastnameValue("");
        } else {
            setlastnameValue();
        }
    };
    return (
        <>
            <Disclosure defaultOpen={open}>
                <div className="py-3 grid grid-cols-3">
                    <h1 className="text-base grid col-span-2">{title}</h1>
                    <Disclosure.Button className="text-right grid mr-3 text-[#2faad3] hover:text-[#373939] ">
                        Edit Details
                    </Disclosure.Button>
                </div>
                <hr className="w-full border-2 border-slate-200" />
                <Disclosure.Panel>
                    <div className="py-3">
                        <p className=" px-3 text-sm text-yellow-500">
                            Make sure that the passenger's name is exactly as
                            written in the government issued ID/Passport/Driving
                            License. Avoid any mistake, because some airlines
                            don't allow name corrections after booking.
                        </p>
                    </div>
                    <div className="flex flex-col py-3">
                        <label htmlFor="" className="">
                            Title<span className="text-red-600">*</span>
                        </label>
                        <select
                            name="trav-title"
                            id="trav-title"
                            className="my-2 w-1/3 rounded-lg"
                        >
                            <option value="mr">Mr</option>
                            <option value="">Mrs</option>
                            <option value="">Ms</option>
                        </select>
                    </div>
                    <div className="flex">
                        <div className="py-3 w-1/2 text-sm">
                            <label htmlFor="" className="">
                                First / Given Name & Middle Name (if any)(ex:
                                Budi Setiawan)
                                <span className="text-red-600">*</span>
                            </label>
                            <div className="flex-col flex my-3">
                                <input
                                    type="text"
                                    name="trav-first"
                                    id="trav-first"
                                    className="rounded-lg"
                                />
                                <span className="text-slate-500 text-xs my-1">
                                    (without title and punctuation)
                                </span>
                            </div>
                        </div>
                        <div
                            className={`py-3 pl-4 w-1/2 text-sm ${
                                lastnameDisabled ? "opacity-50" : ""
                            }`}
                        >
                            <label htmlFor="">
                                Family Name / Last Name (ex: Wiryosaputro)
                                <span className="text-red-600">*</span>
                            </label>
                            <div className="flex-col flex my-2">
                                <input
                                    type="text"
                                    name="trav-last"
                                    id="trav-last"
                                    className="rounded-lg my-1"
                                    readOnly={lastnameDisabled}
                                    value={lastnameValue}
                                />
                                <span className="text-slate-500 text-xs py-1">
                                    (without title and punctuation)
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center pl-10 w-full my-6 gap-3">
                        <input
                            type="checkbox"
                            id="myCheckbox"
                            name="myCheckbox"
                            className=""
                            onChange={handleCheckboxChange}
                            checked={lastnameDisabled}
                        />
                        <h1>This person has no family name / last name</h1>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">
                            Nationality<span className="text-red-600">*</span>
                        </label>
                        <select
                            name="trav-nat"
                            id="trav-nat"
                            className="my-2 w-1/3 rounded-lg"
                        ></select>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </>
    );
};

export default Traveller_Detail;
