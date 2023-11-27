// resources/js/Pages/Routes/Show.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

const PriceCard = ({ title, quantity, price }) => {
    const formattedPrice = price ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price) : 'N/A';

    return (
        <div className="mb-4 bg-white border p-4 rounded-md shadow-md">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">
                Quantity: {quantity} <br />
                Price: {formattedPrice}
            </p>
        </div>
    );
};

const Show = ({ flightRoute, auth, firstClassTickets, businessClassTickets, premiumEconomyTickets, economyTickets }) => {
    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Route Detail
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Time
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.departure} -{" "}
                                    {flightRoute.arrival}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Seats
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                    <PriceCard title="First Class" quantity={flightRoute.seat_conf.first} price={firstClassTickets ? firstClassTickets.price : null} />
                                    <PriceCard title="Business Class" quantity={flightRoute.seat_conf.business} price={businessClassTickets ? businessClassTickets.price : null} />
                                    <PriceCard title="Premium Economy" quantity={flightRoute.seat_conf.premium_economy} price={premiumEconomyTickets ? premiumEconomyTickets.price : null} />
                                    <PriceCard title="Economy" quantity={flightRoute.seat_conf.economy} price={economyTickets ? economyTickets.price : null} />
                                </div>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Source Airport
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.source_airport.name} - {flightRoute.source_airport.IATA}
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Destination Airport
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    {flightRoute.destination_airport.name} - {flightRoute.destination_airport.IATA}
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
                            {/* Add other fields as needed */}

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
                            <Link
                                href={route("admin.routes")}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            >
                                BACK
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;
