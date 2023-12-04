import React from "react";
import { Link, Head, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

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

const ShowTransaction = ({ transaction, passengers, auth, userData }) => {
    // Calculate ticket price based on passenger count
    const ticketPriceBreakdown = `Rp ${new Intl.NumberFormat("id-ID").format(
        transaction.ticket_price * transaction.count
    )} x ${transaction.count} passengers`;

    // Calculate total facility price
    const facilityPrice = passengers.reduce(
        (total, passenger) => total + parseInt(passenger.facility_price || 0),
        0
    );

    // Calculate total assurance price
    const travelAssurancePrice = transaction.is_travel_assurance ? 100000 : 0;
    const delayAssurancePrice = transaction.is_delay_assurance ? 100000 : 0;

    // Calculate the breakdown of prices
    const delayAssurancePriceBreakdown = `Rp ${new Intl.NumberFormat(
        "id-ID"
    ).format(delayAssurancePrice)} x ${transaction.count} passengers`;

    const travelAssurancePriceBreakdown = `Rp ${new Intl.NumberFormat(
        "id-ID"
    ).format(travelAssurancePrice)} x ${transaction.count} passengers`;

    const handleBackToTransactions = () => {
        router.get(route("admin.transactions"));
    };

    return (
        <AdminLayout user={auth.user}>
            <Head title="Profile" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                            <h3 className="text-lg font-semibold mb-2">
                                Buyer Details
                            </h3>
                            <p className="text-gray-500">
                                User ID: {userData.id}
                            </p>
                            <p className="text-gray-500">
                                Name: {userData.name}
                            </p>
                            <p className="text-gray-500">
                                Email: {userData.email}
                            </p>
                        </div>
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
                                            transaction.ticket_price *
                                                transaction.count +
                                                travelAssurancePrice *
                                                    transaction.count +
                                                delayAssurancePrice *
                                                    transaction.count +
                                                facilityPrice
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <div className="mt-4">
                            <button
                                onClick={() => handleBackToTransactions()}
                                className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                            >
                                Back
                            </button>
                            {/* Display Processing */}
                            {transaction.status === 0 && (
                                <div className="mt-2">
                                    <span className="text-red-500 font-semibold">
                                        Unpaid
                                    </span>
                                </div>
                            )}
                            {/* Display Processing */}
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
                            {/* Display canceled status and date */}
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
        </AdminLayout>
    );
};

export default ShowTransaction;
