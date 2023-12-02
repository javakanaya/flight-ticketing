import PaymentMethod from "./PaymentMethod";
import Navbar from "@/Components/Navbar";
import { Disclosure } from "@headlessui/react";
import React, { useState} from "react";

const Traveller_Detail = ({ header, open, nationalities, onUpdate, title, first_name, last_name, nationality, ticked,  isAdult}) => {
    const [lastnameDisabled, setlastnameDisabled] = useState(ticked);
    const [lastnameValue, setlastnameValue] = useState(last_name);
    const [firstnameValue, setfirstnameValue] = useState(first_name);
    const [natValue, setnatValue] = useState(nationality);
    const [titleValue, settitleValue] = useState(title);
    const [isOpenDisclosure, setOpenDisclosure] = useState(open);
    const [isAdultVal, setAdult] = useState(isAdult);

    const [formData, setFormData] = useState({
        title: "Mr",
        first_name: "",
        last_name: "",
        nationality: "1",
        ticked: lastnameDisabled,
        isAdult: isAdultVal,
    });

    const handleCheckboxChange = () => {
        setlastnameDisabled(!lastnameDisabled);
        let newValue = "";
        if (!lastnameDisabled) {
            newValue = formData.first_name;
        }
        setlastnameValue(newValue);
        updateFormData({ last_name: newValue});
        setFormData((prevData) => {
            const updatedData = { ...prevData, ticked: !lastnameDisabled};
            // console.log("New value : ", newValue);
            console.log("Updated state: ", updatedData);
            onUpdate(updatedData); // Trigger the onUpdate callback with the updated data
            return updatedData; // Return the updated state
        });
    };


    const handleFirstNameChange = (e) => {
        const newValue = e.target.value;
        // console.log("New value : ", newValue)
        setfirstnameValue(newValue);
        if(lastnameDisabled){
            setlastnameValue(newValue);
        }
        setFormData((prevData) => {
            const updatedData = { ...prevData, first_name: newValue };
            if (lastnameDisabled) {
                updatedData.last_name = newValue;
              }
          

            // console.log("New value : ", newValue);
            // console.log("Updated state: ", updatedData);
            onUpdate(updatedData); // Trigger the onUpdate callback with the updated data
            return updatedData; // Return the updated state
        });
    };

    const handleLastNameChange = (e) => {
        const newValue = e.target.value;
        console.log("New value : ", newValue)
        setlastnameValue(newValue);
        setFormData((prevData) => {
            const updatedData = { ...prevData, last_name: newValue };
            // console.log("New value : ", newValue);
            // console.log("Updated state: ", updatedData);
            onUpdate(updatedData); // Trigger the onUpdate callback with the updated data
            return updatedData; // Return the updated state
        });
    };

    const handleNationalityChange = (e) => {
        const newValue = e.target.value;
        console.log("New value : ", newValue)
        setnatValue(newValue);
        setFormData((prevData) => {
            const updatedData = { ...prevData, nationality: newValue };
            console.log("New value : ", newValue);
            console.log("Updated state: ", updatedData);
            onUpdate(updatedData); // Trigger the onUpdate callback with the updated data
            return updatedData; // Return the updated state
        });
    };

    const handleTitleChange = (e) => {
        const newValue = e.target.value;
        console.log("New value: ", newValue);
        settitleValue(newValue);
    
        setFormData((prevData) => {
            const updatedData = { ...prevData, title: newValue };
            console.log("Updated state: ", updatedData);
            onUpdate(updatedData); // Trigger the onUpdate callback with the updated data
            return updatedData; // Return the updated state
        });
    };
    

    const updateFormData = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        onUpdate(formData); // Trigger the onUpdate callback with the updated data
    };

    return (
        <>
            <Disclosure defaultOpen={isOpenDisclosure}>
                <div className="py-3 grid grid-cols-3">
                    <h1 className="text-base grid col-span-2">{((firstnameValue != "") && (lastnameValue != "")) ? ` ${titleValue} ${firstnameValue} ${lastnameValue}` : header}</h1>
                    <Disclosure.Button className="text-right grid mr-3 text-[#2faad3] hover:text-[#373939]" onClick={() => setOpenDisclosure(!isOpenDisclosure)}>
                        {isOpenDisclosure ? "Save" : "Edit Details"}
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
                            value={titleValue}
                            onChange={handleTitleChange}
                            required
                        >
                            <option value="Mr">Mr</option>
                            {isAdult && isAdult.toString().toLowerCase() === 'true' ? (
                                <option value="Mrs">Mrs</option>
                                ): <div></div>}
                            <option value="Ms">Ms</option>
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
                                    value={firstnameValue}
                                    onChange={handleFirstNameChange}
                                    required
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
                                    onChange={handleLastNameChange}
                                    required
                                    
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
                            value={natValue}
                            onChange={handleNationalityChange}
                        >
                            {nationalities.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </Disclosure.Panel>
            </Disclosure>
        </>
    );
};

export default Traveller_Detail;
