import PaymentMethod from './PaymentMethod';
import Navbar from '@/Components/Navbar';
import { Disclosure } from '@headlessui/react'
import React, { useState } from 'react';



const Contact_Detail = ({open}) => {
    const [lastnameDisabled, setlastnameDisabled] = useState(false);
    const [lastnameValue, setlastnameValue] = useState();
    const handleCheckboxChange = () =>{
        setlastnameDisabled(!lastnameDisabled);
        if (!lastnameDisabled){
            setlastnameValue('');
        }
        else{
            setlastnameValue();
        }
    };
    return (
        <>
            <Disclosure defaultOpen={open}>
            <div className="py-3 grid grid-cols-3">
            <h1 className="text-base grid col-span-2">Contact Details (for E-ticket/Voucher)</h1>
                <Disclosure.Button className="text-right grid mr-3 text-[#2faad3] hover:text-[#373939] ">
                    Edit Details
                </Disclosure.Button>
            </div>
            <hr className='w-full border-2 border-slate-200'/>
            <Disclosure.Panel>
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
                    <div className={`py-3 pl-4 w-1/2 text-sm ${lastnameDisabled ? 'opacity-50' : ''}`}>
                        <label htmlFor="">
                            Family Name / Last Name (ex: Wiryosaputro)<span className="text-red-600">*</span>
                        </label>
                        <div className="flex-col flex my-2">
                            <input type="text" name="ctc-last-name" id="ctc-last-name" className="rounded-lg my-1" readOnly={lastnameDisabled} value={lastnameValue}/>
                            <span className="text-slate-500 text-xs py-1">(without title and punctuation)</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pl-10 w-full my-6 gap-3">
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" className="" onChange={handleCheckboxChange} checked={lastnameDisabled} />
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
            </Disclosure.Panel>
            </Disclosure>
        </>
    )
}

export default Contact_Detail;