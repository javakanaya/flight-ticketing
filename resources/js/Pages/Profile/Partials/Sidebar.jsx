import React from "react";
import DangerButton from "../../../Components/DangerButton";
import { Link } from "@inertiajs/react";

const Sidebar = (adminStatus) => {
    const isAdmin = adminStatus.adminStatus;
    return (
        <aside
            id="default-sidebar"
            className="top-0 left-0 z-40 w-64 h-min p-4 sm:p-8 bg-white shadow-lg sm:rounded-lg transition-transform -translate-x-full sm:translate-x-0 text-white flex flex-col justify-between mx-5 my-12 rounded-full"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto ">
                {isAdmin ? (
                    <ul className="space-y-2 font-medium">
                         <li>
                            <a
                                href="/profile"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Profile
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/admin"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    class="flex-shrink-0  w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Admin Dashboard
                                </span>
                            </a>
                        </li>{" "}
                    </ul>
                ) : (
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="/profile"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Profile
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/profile/bookings"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Bookings
                                </span>
                            </a>
                        </li>
                    </ul>
                )}
            </div>
            <Link href={route("logout")} method="post" as="button">
                <DangerButton className="ml-3">Log Out</DangerButton>
            </Link>
        </aside>
    );
};

export default Sidebar;
