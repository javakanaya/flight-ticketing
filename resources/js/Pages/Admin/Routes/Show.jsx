// resources/js/Pages/Routes/Show.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import { Link, Head } from "@inertiajs/react";


const PriceCard = ({ title, price, seatsLeft, seatsSold, totalSeats }) => {
    const formattedPrice = price
        ? new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
          }).format(price)
        : "N/A";

    return (
        <div className="mb-4 bg-white border p-4 rounded-md shadow-md">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">
                Price: {formattedPrice} <br />
                Total Seats: {totalSeats} <br />
                Seats Left: {seatsLeft} <br />
                Seats Sold: {seatsSold} 
            </p>
        </div>
    );
};

const FacilityCard = ({ name, price }) => {
    const formattedPrice = price
        ? new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
          }).format(price)
        : "N/A";

    return (
        <div className="mb-4 bg-white border p-4 rounded-md shadow-md">
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-600">
                Price: {formattedPrice}
            </p>
        </div>
    );
};

const Show = ({
    flightRoute,
    facilities,
    auth,
    firstClassTickets,
    businessClassTickets,
    premiumEconomyTickets,
    economyTickets,
    success,
    errors,
}) => {
    const deleteRoute = async (id) => {
        Inertia.delete(`/admin/routes/${id}`);
    };

    const [confirmDelete, setConfirmDelete] = React.useState(false);
    const handleDeleteClick = (postId) => {
        // Set postId to delete
        setConfirmDelete(postId);
    };

    const handleConfirmDelete = () => {
        // Perform the actual delete action
        deleteRoute(confirmDelete);
        // Reset the confirmation state
        setConfirmDelete(false);
    };

    const handleCancelDelete = () => {
        // Reset the confirmation state
        setConfirmDelete(false);
    };
    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Route Detail
                </h2>
            }
        >
            <Head title="Route Detail" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {success && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                    {success}
                                </div>
                            )}

                            {errors && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                    {errors}
                                </div>
                            )}

                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Time
                                </h2>
                                <div className="flex flex-col mt-1 space-y-2 text-sm text-gray-600">
                                    <div>
                                        <span className="font-semibold">
                                            Departure:
                                        </span>{" "}
                                        {new Date(
                                            flightRoute.departure
                                        ).toLocaleString("en-US", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}{" "}
                                        -{" "}
                                        {new Date(
                                            flightRoute.departure
                                        ).toLocaleTimeString("en-US")}
                                    </div>
                                    <div>
                                        <span className="font-semibold">
                                            Arrival:
                                        </span>{" "}
                                        {new Date(
                                            flightRoute.arrival
                                        ).toLocaleString("en-US", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}{" "}
                                        -{" "}
                                        {new Date(
                                            flightRoute.arrival
                                        ).toLocaleTimeString("en-US")}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Seats
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <PriceCard
                                        title="First Class"
                                        seatsLeft={flightRoute.seat_conf.first}
                                        seatsSold={flightRoute.seat_conf.first_original - flightRoute.seat_conf.first}
                                        totalSeats={flightRoute.seat_conf.first_original}
                                        price={
                                            firstClassTickets
                                                ? firstClassTickets.price
                                                : null
                                        }
                                    />
                                    <PriceCard
                                        title="Business Class"
                                        seatsLeft={flightRoute.seat_conf.business}
                                        seatsSold={flightRoute.seat_conf.business_original - flightRoute.seat_conf.business}
                                        totalSeats={flightRoute.seat_conf.business_original}
                                        price={
                                            businessClassTickets
                                                ? businessClassTickets.price
                                                : null
                                        }
                                    />
                                    <PriceCard
                                        title="Premium Economy"
                                        seatsLeft={flightRoute.seat_conf.premium_economy}
                                        seatsSold={flightRoute.seat_conf.premium_economy_original - flightRoute.seat_conf.premium_economy}
                                        totalSeats={flightRoute.seat_conf.premium_economy_original}
                                        price={
                                            premiumEconomyTickets
                                                ? premiumEconomyTickets.price
                                                : null
                                        }
                                    />
                                    <PriceCard
                                        title="Economy"
                                        seatsLeft={flightRoute.seat_conf.economy}
                                        seatsSold={flightRoute.seat_conf.economy_original - flightRoute.seat_conf.economy}
                                        totalSeats={flightRoute.seat_conf.economy_original}
                                        price={
                                            economyTickets
                                                ? economyTickets.price
                                                : null
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Source Airport
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.source_airport.name} -{" "}
                                    {flightRoute.source_airport.IATA}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Destination Airport
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.destination_airport.name} -{" "}
                                    {flightRoute.destination_airport.IATA}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Airline
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.airline.name}
                                </p>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Facilities
                                </h2>
                                {facilities.map(
                                    (facility, index) => (
                                        <FacilityCard
                                            key={index}
                                            name={facility.name}
                                            price={facility.price}
                                        />
                                    )
                                )}
                            </div>

                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Created At
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.created_at}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Updated At
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.updated_at}
                                </p>
                            </div>
                            <div className="flex items-center justify-end border-b border-slate-100 p-4 pl-8 text-slate-500">
                                <Link
                                    href={route(
                                        "admin.routes.edit",
                                        flightRoute.id
                                    )}
                                    className="border border-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md"
                                >
                                    EDIT
                                </Link>
                                <button
                                    type="submit"
                                    className="border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md ml-2"
                                    onClick={() =>
                                        handleDeleteClick(airline.id)
                                    }
                                >
                                    DELETE
                                </button>
                                <Link
                                    href={route("admin.routes")}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                                >
                                    BACK
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {confirmDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        <p className="text-lg font-semibold mb-4">
                            Are you sure you want to delete this Route?
                        </p>
                        <div className="flex justify-end">
                            <button
                                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md"
                                onClick={handleConfirmDelete}
                            >
                                Yes
                            </button>
                            <button
                                className="px-4 py-2 border border-gray-300 rounded-md"
                                onClick={handleCancelDelete}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default Show;
