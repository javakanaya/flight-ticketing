import React from "react";
import { Link } from "@inertiajs/react";
import Sidebar from "@/Pages/Profile/Partials/Sidebar";
import Navbar from "@/Components/Navbar";

const Profile = ({ children, user }) => {
    return (
        <div className="font-sans w-full flex py-10 h-28 bg-[#60cff4]">
            <Navbar user={user} />
           
            <Sidebar />

            {/* Content Area */}
            <div className="w-2/3">
                {/* Page Content */}
                {children}
            </div>
        </div>
    );
};

export default Profile;
