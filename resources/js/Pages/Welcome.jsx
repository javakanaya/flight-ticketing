import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import { Routes } from 'react-router-dom';
import "../../css/welcome.css"
import Home from'../Components/routes/Home';

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
  return (
    <>
        <Head title="Welcome" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
        <div className='App'>
            <Navbar />
            <Home />
        </div>
    </>
  );
};

export default Welcome;
