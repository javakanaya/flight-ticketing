import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import { Routes } from 'react-router-dom';
import Home from'../Components/routes/Home';

const Flights = ({ auth, laravelVersion, phpVersion }) => {
  return (
    <>
        <Head title="Flights" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className='w-full h-32 bg-gradient-to-r from-blue-300 to-purple-200'>
            <Navbar />
        </div>
    </>
  );
};

export default Flights;
