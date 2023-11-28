// resources/js/Pages/Routes/Edit.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const Edit = ({ airports, airlines, auth, flightRoute, firstClassTickets, businessClassTickets, premiumEconomyTickets, economyTickets }) => {
    const { data, setData, put, errors } = useForm({
        departure: flightRoute.departure,
        arrival: flightRoute.arrival,
        source_airport_id: flightRoute.source_airport_id,
        destination_airport_id: flightRoute.destination_airport_id,
        airline_id: flightRoute.airline_id,
        // Add other fields as needed
        first_class_price: firstClassTickets ? firstClassTickets.price : '',
        first_class_seat_count: firstClassTickets ? flightRoute.seat_conf.first : '',
        business_price: businessClassTickets ? businessClassTickets.price : '',
        business_seat_count: businessClassTickets ? flightRoute.seat_conf.business : '',
        premium_economy_price: premiumEconomyTickets ? premiumEconomyTickets.price : '',
        premium_economy_seat_count: premiumEconomyTickets ? flightRoute.seat_conf.premium_economy : '',
        economy_price: economyTickets ? economyTickets.price : '',
        economy_seat_count: economyTickets ? flightRoute.seat_conf.economy : '',
    });

    const handleUpdate = (e) => {
        e.preventDefault();

        put(route("admin.routes.update", flightRoute.id), data);
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Route
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleUpdate}>
                                {/* Departure and Arrival */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="departure"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Departure
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="departure"
                                        name="departure"
                                        value={data.departure}
                                        onChange={(e) =>
                                            setData("departure", e.target.value)
                                        }
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.departure && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.departure}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="arrival"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Arrival
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="arrival"
                                        name="arrival"
                                        value={data.arrival}
                                        onChange={(e) =>
                                            setData("arrival", e.target.value)
                                        }
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.arrival && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.arrival}
                                        </p>
                                    )}
                                </div>

                                {/* Source and Destination Airports */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="source_airport_id"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Source Airport
                                    </label>
                                    <select
                                        id="source_airport_id"
                                        name="source_airport_id"
                                        value={data.source_airport_id}
                                        onChange={(e) =>
                                            setData(
                                                "source_airport_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 p-2 w-full border rounded-md"
                                    >
                                        <option value="">
                                            Select Source Airport
                                        </option>
                                        {airports.map((airport) => (
                                            <option
                                                key={airport.id}
                                                value={airport.id}
                                            >
                                                {airport.name} - {airport.IATA}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.source_airport_id && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.source_airport_id}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="destination_airport_id"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Destination Airport
                                    </label>
                                    <select
                                        id="destination_airport_id"
                                        name="destination_airport_id"
                                        value={data.destination_airport_id}
                                        onChange={(e) =>
                                            setData(
                                                "destination_airport_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 p-2 w-full border rounded-md"
                                    >
                                        <option value="">
                                            Select Destination Airport
                                        </option>
                                        {airports.map((airport) => (
                                            <option
                                                key={airport.id}
                                                value={airport.id}
                                            >
                                                {airport.name} - {airport.IATA}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.destination_airport_id && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.destination_airport_id}
                                        </p>
                                    )}
                                </div>

                                {/* Airline */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="airline_id"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Airline
                                    </label>
                                    <select
                                        id="airline_id"
                                        name="airline_id"
                                        value={data.airline_id}
                                        onChange={(e) =>
                                            setData(
                                                "airline_id",
                                                e.target.value
                                            )
                                        }
                                        className="mt-1 p-2 w-full border rounded-md"
                                    >
                                        <option value="">Select Airline</option>
                                        {airlines.map((airline) => (
                                            <option
                                                key={airline.id}
                                                value={airline.id}
                                            >
                                                {airline.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.airline_id && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.airline_id}
                                        </p>
                                    )}
                                </div>

                                           {/* Economy Class */}
                                           <div className="mb-4">
                                    <label htmlFor="economy_price" className="block text-sm font-medium text-gray-600">
                                        Economy Class Price
                                    </label>
                                    <input
                                        type="number"
                                        id="economy_price"
                                        name="economy_price"
                                        value={data.economy_price}
                                        onChange={(e) => setData("economy_price", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.economy_price && <p className="text-red-500 text-xs mt-1">{errors.economy_price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="economy_seat_count" className="block text-sm font-medium text-gray-600">
                                        Economy Class Seat Count
                                    </label>
                                    <input
                                        type="number"
                                        id="economy_seat_count"
                                        name="economy_seat_count"
                                        value={data.economy_seat_count}
                                        onChange={(e) => setData("economy_seat_count", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.economy_seat_count && <p className="text-red-500 text-xs mt-1">{errors.economy_seat_count}</p>}
                                </div>

                                {/* Premium Economy Class */}
                                <div className="mb-4">
                                    <label htmlFor="premium_economy_price" className="block text-sm font-medium text-gray-600">
                                        Premium Economy Class Price
                                    </label>
                                    <input
                                        type="number"
                                        id="premium_economy_price"
                                        name="premium_economy_price"
                                        value={data.premium_economy_price}
                                        onChange={(e) => setData("premium_economy_price", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.premium_economy_price && <p className="text-red-500 text-xs mt-1">{errors.premium_economy_price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="premium_economy_seat_count" className="block text-sm font-medium text-gray-600">
                                        Premium Economy Class Seat Count
                                    </label>
                                    <input
                                        type="number"
                                        id="premium_economy_seat_count"
                                        name="premium_economy_seat_count"
                                        value={data.premium_economy_seat_count}
                                        onChange={(e) => setData("premium_economy_seat_count", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.premium_economy_seat_count && <p className="text-red-500 text-xs mt-1">{errors.premium_economy_seat_count}</p>}
                                </div>

                                {/* Business Class */}
                                <div className="mb-4">
                                    <label htmlFor="business_price" className="block text-sm font-medium text-gray-600">
                                        Business Class Price
                                    </label>
                                    <input
                                        type="number"
                                        id="business_price"
                                        name="business_price"
                                        value={data.business_price}
                                        onChange={(e) => setData("business_price", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.business_price && <p className="text-red-500 text-xs mt-1">{errors.business_price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="business_seat_count" className="block text-sm font-medium text-gray-600">
                                        Business Class Seat Count
                                    </label>
                                    <input
                                        type="number"
                                        id="business_seat_count"
                                        name="business_seat_count"
                                        value={data.business_seat_count}
                                        onChange={(e) => setData("business_seat_count", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.business_seat_count && <p className="text-red-500 text-xs mt-1">{errors.business_seat_count}</p>}
                                </div>

                                {/* First Class */}
                                <div className="mb-4">
                                    <label htmlFor="first_class_price" className="block text-sm font-medium text-gray-600">
                                        First Class Price
                                    </label>
                                    <input
                                        type="number"
                                        id="first_class_price"
                                        name="first_class_price"
                                        value={data.first_class_price}
                                        onChange={(e) => setData("first_class_price", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.first_class_price && <p className="text-red-500 text-xs mt-1">{errors.first_class_price}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="first_class_seat_count" className="block text-sm font-medium text-gray-600">
                                        First Class Seat Count
                                    </label>
                                    <input
                                        type="number"
                                        id="first_class_seat_count"
                                        name="first_class_seat_count"
                                        value={data.first_class_seat_count}
                                        onChange={(e) => setData("first_class_seat_count", e.target.value)}
                                        className="mt-1 p-2 w-full border rounded-md"
                                    />
                                    {errors.first_class_seat_count && <p className="text-red-500 text-xs mt-1">{errors.first_class_seat_count}</p>}
                                </div>

                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Edit Route
                                    </button>
                                    <Link
                                        href={route("admin.routes")}
                                        className="ml-4 text-blue-500"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
