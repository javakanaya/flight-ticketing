import React from "react";
import { Link } from "@inertiajs/react";

const Profile = ({ children, user }) => {
    return (
        <div className="font-sans bg-gray-100 h-screen flex ">
            {/* Floating Left Sidebar */}
            <aside className="bg-blue-400 text-white w-64 flex flex-col justify-between mx-5 my-10">
                <div className="p-4">
                    <img
                        src={user.profile_image_url}
                        alt="Profile Image"
                        className="w-16 h-16 rounded-full mx-auto"
                    />
                    <h2 className="mt-2 text-xl font-semibold text-center">
                        {user.name}
                    </h2>
                </div>
                <nav className="flex-1">
                    <ul className="space-y-2">
                        <li className="py-2 px-4 hover:bg-blue-600">
                            <Link href="/profile" className="block">
                                Profile Details
                            </Link>
                        </li>
                        <li className="py-2 px-4 hover:bg-blue-600">
                            <Link
                                href="/profile/transactions"
                                className="block"
                            >
                                Transaction List
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-4">
                    <Link
                        href={route('logout')} method="post" as="button"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                    >
                        Logout
                    </Link>
                </div>
            </aside>

            {/* Content Area */}
            <div className="ml-5 py-8">
                {/* Page Content */}
                {children}
            </div>
        </div>
    );
};

export default Profile;
