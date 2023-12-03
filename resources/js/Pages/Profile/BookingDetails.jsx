import React from "react";
import { Link, Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { useState } from "react";
import { useEffect } from "react";

function capitalizeCity(city) {
    return city
        .split(" ")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
}

const getStatusBadge = (status) => {
    switch (status) {
        case 0:
            return (
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                    Unpaid
                </span>
            );
        case 1:
            return (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                    Processing
                </span>
            );
        case 2:
            return (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                    Paid
                </span>
            );
        case 3:
            return (
                <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                    Canceled
                </span>
            );
        default:
            return null;
    }
};

const BookingDetails = ({ auth, transaction, passengers, message }) => {

    // Calculate ticket price based on passenger count

    // Calculate total facility price
    const facilityPrice = passengers.reduce((total, passenger) => {
        return total + parseInt(passenger.facility_price || 0); // Make sure to adjust this based on the actual field name for facility price
    }, 0);

    // Calculate total assurance price
    const travelAssurancePrice =
        transaction.is_travel_assurance == true ? 100000 : 0;
    const delayAssurancePrice =
        transaction.is_delay_assurance === true ? 100000 : 0;

    // Calculate the breakdown of prices
    const ticketPriceBreakdown =
        "Rp " +
        new Intl.NumberFormat("id-ID").format(
            parseInt(transaction.ticket_price)
        ) +
        " x " +
        transaction.count +
        " passengers";

    const delayAssurancePriceBreakdown =
        "Rp " +
        new Intl.NumberFormat("id-ID").format(parseInt(delayAssurancePrice)) +
        " x " +
        transaction.count +
        " passengers";

    const travelAssurancePriceBreakdown =
        "Rp " +
        new Intl.NumberFormat("id-ID").format(parseInt(travelAssurancePrice)) +
        " x " +
        transaction.count +
        " passengers";

    const [notification, setNotification] = useState(null);

    // Effect to show notification when the message changes
    useEffect(() => {
        if (message) {
            showNotification(message);
        }
    }, [message]);

    const showNotification = (message) => {
        setNotification(message);

        // Hide the notification after a certain time (e.g., 5 seconds)
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    };

    return (
        <ProfileLayout user={auth.user}>
            <Head title="Profile" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-2">
                                {capitalizeCity(transaction.source_city_name)}{" "}
                                to{" "}
                                {capitalizeCity(
                                    transaction.destination_city_name
                                )}
                            </h3>
                            <div className="flex items-center mt-2">
                                {getStatusBadge(transaction.status)}
                                <p className="text-gray-500">
                                    {" "}
                                    Booked on: {""}
                                    {new Date(
                                        transaction.created_date
                                    ).toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                    })}
                                </p>
                            </div>
                            <p className="text-gray-500 mt-2">
                                Airlines: {transaction.airline_name}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Flight ID: {transaction.airline_IATA} -{" "}
                                {transaction.route_id}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Departure Airport:{" "}
                                {capitalizeCity(
                                    transaction.source_airport_name
                                )}
                                - {transaction.source_airport_IATA}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Arrival Airport:{" "}
                                {capitalizeCity(
                                    transaction.destination_airport_name
                                )}
                                - {transaction.destination_airport_IATA}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Departure Date:{" "}
                                {new Date(
                                    transaction.departure_date
                                ).toLocaleString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}
                            </p>
                            <p className="text-gray-500 mt-2">
                                Arrival Date:{" "}
                                {new Date(
                                    transaction.arrival_date
                                ).toLocaleString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                })}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                            Passenger Lists
                        </h3>
                        <table className="w-full">
                            <tbody>
                                {passengers.map((passenger, index) => (
                                    <tr key={index}>
                                        <td>
                                            {passenger.title}{" "}
                                            {passenger.first_name}{" "}
                                            {passenger.last_name}
                                        </td>
                                        <td>{passenger.facility_name}</td>
                                        <td className="text-right">
                                            {passenger.facility_price > 0
                                                ? `Rp ${new Intl.NumberFormat(
                                                      "id-ID"
                                                  ).format(
                                                      passenger.facility_price
                                                  )}`
                                                : "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                            Price Breakdown
                        </h3>
                        <table className="table-auto w-full">
                            <tbody>
                                <tr>
                                    <td className="text-gray-500">
                                        Total Ticket Price
                                    </td>
                                    <td className="text-gray-500">
                                        {ticketPriceBreakdown}
                                    </td>
                                    <td className="text-right">
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            transaction.ticket_price *
                                                transaction.count
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-gray-500">
                                        Total Facility Price
                                    </td>
                                    <td />
                                    <td className="text-right">
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            facilityPrice
                                        )}
                                    </td>
                                </tr>
                                {travelAssurancePrice > 0 ? (
                                    <tr>
                                        <td className="text-gray-500">
                                            Travel Assurance:
                                        </td>
                                        <>
                                            <td className="text-gray-500">
                                                {travelAssurancePriceBreakdown}
                                            </td>
                                            <td className="text-right">
                                                Rp{" "}
                                                {new Intl.NumberFormat(
                                                    "id-ID"
                                                ).format(
                                                    travelAssurancePrice *
                                                        transaction.count
                                                )}
                                            </td>
                                        </>
                                    </tr>
                                ) : null}
                                {delayAssurancePrice > 0 && (
                                    <tr>
                                        <td className="text-gray-500">
                                            Delay Assurance:
                                        </td>
                                        <>
                                            <td className="text-gray-500">
                                                {delayAssurancePriceBreakdown}
                                            </td>
                                            <td className="text-right">
                                                Rp{" "}
                                                {new Intl.NumberFormat(
                                                    "id-ID"
                                                ).format(
                                                    delayAssurancePrice *
                                                        transaction.count
                                                )}
                                            </td>
                                        </>
                                    </tr>
                                )}
                                <tr>
                                    <td className="text-gray-500 font-semibold">
                                        Total Price
                                    </td>
                                    <td />
                                    <td className="text-right font-semibold">
                                        Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            transaction.total_price
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="mt-4">
                            {/* Payment button */}
                            {transaction.status === 0 && (
                                <Link
                                    href={route("profile.transaction.pay", {
                                        id: transaction.id,
                                    })}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Pay Now
                                </Link>
                            )}
                            {/* Cancellation button */}
                            {transaction.status === 0 && (
                                <Link
                                    href={route("profile.transaction.cancel", {
                                        id: transaction.id,
                                    })}
                                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                                >
                                    Cancel
                                </Link>
                            )}
                            {/* Display Procesing */}
                            {transaction.status === 1 && (
                                <div className="mt-2">
                                    <span className="text-gray-500 font-semibold">
                                        Processing
                                    </span>
                                </div>
                            )}
                            {/* Display paid status and date */}
                            {transaction.status === 2 && (
                                <div className="mt-2">
                                    <span className="text-green-500 font-semibold">
                                        Paid
                                    </span>
                                    <span className="text-gray-500 ml-2">
                                        (Paid on{" "}
                                        {new Date(
                                            transaction.updated_date
                                        ).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                        })}
                                        )
                                    </span>
                                </div>
                            )}
                            {/* Display paid status and date */}
                            {transaction.status === 3 && (
                                <div className="mt-2">
                                    <span className="text-orange-500 font-semibold">
                                        Canceled
                                    </span>
                                    <span className="text-gray-500 ml-2">
                                        (Canceled on{" "}
                                        {new Date(
                                            transaction.updated_date
                                        ).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "numeric",
                                        })}
                                        )
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {notification && (
                <div
                    className={`flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${
                        notification.type === "success"
                            ? "dark:text-gray-400 dark:bg-gray-800"
                            : "dark:text-gray-500 dark:bg-red-800"
                    }`}
                    role="alert"
                >
                    {/* Notification content based on the message type */}
                    <div
                        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${
                            notification.type === "success"
                                ? "text-green-500 bg-green-100"
                                : "text-red-500 bg-red-100"
                        } rounded-lg dark:bg-green-800 dark:text-green-200`}
                    >
                        {/* Notification icon */}
                        {notification.type === "success" ? (
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                            </svg>
                        )}
                        <span className="sr-only">
                            {notification.type === "success"
                                ? "Check icon"
                                : "Error icon"}
                        </span>
                    </div>

                    {/* Notification message */}
                    <div className="ms-3 text-sm font-normal">
                        {notification.content}
                    </div>

                    {/* Close button */}
                    <button
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        onClick={() => setNotification(null)}
                        aria-label="Close"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </ProfileLayout>
    );
};

export default BookingDetails;
