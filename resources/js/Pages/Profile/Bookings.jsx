import React from "react";
import { Link, Head } from "@inertiajs/react";
import ProfileLayout from "@/Layouts/ProfileLayout";

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
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Unpaid
                </span>
            );
        case 1:
            return (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Processing
                </span>
            );
        case 2:
            return (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Paid
                </span>
            );
        case 3:
            return (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Canceled
                </span>
            );
        default:
            return null;
    }
};

const Bookings = ({ auth, transactions }) => {
    console.log(transactions);

    return (
        <ProfileLayout user={auth.user}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                                >
                                    <h3 className="text-lg font-semibold mb-2">
                                        {capitalizeCity(
                                            transaction.source_city_name
                                        )}{" "}
                                        to{" "}
                                        {capitalizeCity(
                                            transaction.destination_city_name
                                        )}
                                    </h3>
                                    <div className="flex items-center mt-2">
                                        {getStatusBadge(transaction.status)}
                                        <p className="text-gray-500">
                                            {new Date(
                                                transaction.created_date
                                            ).toLocaleString("id-ID", {
                                                weekday: "long",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </div>
                                    <p className="text-gray-500 mt-2">
                                        Total Price: Rp{" "}
                                        {new Intl.NumberFormat("id-ID").format(
                                            transaction.total_price
                                        )}
                                    </p>
                                    <p className="text-gray-500 mt-2">
                                        Ticket Count: {transaction.count}
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            href={route(
                                                "profile.transaction.detail",
                                                {
                                                    id: transaction.id,
                                                }
                                            )}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div
                                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                            >
                                No transactions found.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
};

export default Bookings;
