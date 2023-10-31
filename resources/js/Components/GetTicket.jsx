import React from 'react'
import {GrLocation} from 'react-icons/gr'
import "../../css/getTicket.css"
import {HiFilter} from 'react-icons/hi'
import {AiOutlineCalendar} from 'react-icons/ai'
import {BsPersonAdd, BsPerson} from 'react-icons/bs'
import {TbPlaneArrival} from 'react-icons/tb'
import {LiaPlaneDepartureSolid } from 'react-icons/lia'
import {PiBaby} from 'react-icons/pi'
import {FaChildReaching} from 'react-icons/fa6'
import {GoSearch} from 'react-icons/go'
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react'


function GetTicket(){
    const [counts, setCounts] = useState({
        adult: 1,
        child: 0,
        infant: 0
      });
      const [showDropdown, setShowDropdown] = useState(false);

      const [isReturn, setIsReturn] = useState(false);

      const handleReturnCheckbox = (e) => {
        setIsReturn(e.target.checked);
      };
      
        <div className='destinationInput'>
            <div classname="label">
                <label htmlFor="city">Return Date</label>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue" />
            </div>
            <div className="input flex">
                <AiOutlineCalendar className='icon'/>
                <input type="date" placeholder='Enter Destination' />
            </div>
        </div>
    
      const handleCounter = (type, action) => {
        setCounts(prevCounts => ({
          ...prevCounts,
          [type]: action === 'add' ? prevCounts[type] + 1 : prevCounts[type] > 0 ? prevCounts[type] - 1 : 0
        }));
      };
      
    
  
  return (
    <>
    <div className="cardDiv grid ">
        <div className='destinationInput'>
            <label htmlFor="city">Enter your Origin</label>
            <div className="input flex">
                <LiaPlaneDepartureSolid className="icon"/>
                <input type="text" placeholder='Enter Origin' />
            </div>
        </div>
        <div className='destinationInput'>
            <label htmlFor="city">Enter your Destination</label>
            <div className="input flex">
                <TbPlaneArrival className="icon"/>
                <input type="text" placeholder='Enter Destination' />
            </div>
        </div>

        <div className='destinationInput'>
            <label htmlFor="city">No. of Passenger</label>
            <div className="input flex">
                <BsPersonAdd className="icon"/>
                <button className="button-passenger" onClick={() => setShowDropdown(!showDropdown)}>{counts.adult} Adult, {counts.child} Kid, {counts.infant} Toodler</button>
                {showDropdown && (
                <div className="dropdown-content">
                    <div className='dropdown-item'>
                        <BsPerson className="icon"/>
                        <span>{counts.adult} Adult</span>
                        <div className="counterButton">
                            <button onClick={() => handleCounter('adult', 'substract')}>-</button>
                            <button onClick={() => handleCounter('adult', 'add')}>+</button>
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        <FaChildReaching className="icon"/>
                        <span>{counts.child} Child</span>
                        <div className="counterButton">
                            <button onClick={() => handleCounter('child', 'substract')}>-</button>
                            <button onClick={() => handleCounter('child', 'add')}>+</button>
                        </div>
                    </div>
                    <div className='dropdown-item'>
                        <PiBaby className="icon"/>
                        <span>{counts.infant} Infant</span>
                        <div className="counterButton">
                            <button onClick={() => handleCounter('infant', 'substract')}>-</button>
                            <button onClick={() => handleCounter('infant', 'add')}>+</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
               
        </div>
        

        <div className='destinationInput'>
            <label htmlFor="city">Departure Date</label>
            <div className="input flex">
                <AiOutlineCalendar className='icon'/>
                <input type="date"/>
            </div>
        </div>
        
        <div className='destinationInput'>
            <div className="flex">
                <label htmlFor="city">Return Date</label>
                <input 
                type="checkbox" 
                id="myCheckbox" 
                name="myCheckbox" 
                value="checkboxValue" 
                onChange={handleReturnCheckbox}
                className='appearance-none rounded-md border-2 border-gray-300 checked:bg-blue-600 checked:border-transparent focus:outline-none'
                />
            </div>
            {isReturn && (
                <div className="input flex">
                    <AiOutlineCalendar className='icon'/>
                    <input type="date" placeholder='Enter Destination' />
                </div>
            )}
        </div>

        
        <div className='destinationInput'>
            <div className="flex searchDiv">
                <GoSearch className='icon'/>
                <Link className="search-button">Search</Link>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default GetTicket;