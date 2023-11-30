import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";

const EditAirline = ({ airline, auth }) => {
    const { data, setData, errors, put, processing } = useForm({
        name: airline.name,
        IATA: airline.IATA,
        facilities: airline.facilities || [], // Assuming facilities is an array of objects with name and price
        // Add other fields as needed
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route("admin.airlines.update", airline.id));
    };

    const handleAddFacility = () => {
        setData("facilities", [...data.facilities, { name: "", price: 0 }]);
    };

    const handleRemoveFacility = (index) => {
        const updatedFacilities = [...data.facilities];
        updatedFacilities.splice(index, 1);
        setData("facilities", updatedFacilities);
    };

    const handleFacilityChange = (index, key, value) => {
        const updatedFacilities = [...data.facilities];
        updatedFacilities[index][key] = value;
        setData("facilities", updatedFacilities);
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Airline
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="text-lg font-medium text-gray-900"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="IATA"
                                        className="text-lg font-medium text-gray-900"
                                    >
                                        IATA Code
                                    </label>
                                    <input
                                        id="IATA"
                                        type="text"
                                        name="IATA"
                                        value={data.IATA}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                    {errors.IATA && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.IATA}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="facilities"
                                        className="block text-sm font-medium text-gray-600"
                                    >
                                        Facilities
                                    </label>
                                    {data.facilities.map((facility, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2"
                                        >
                                            <input
                                                type="text"
                                                placeholder="Facility Name"
                                                className="mt-1 p-2 w-1/2 border rounded-md"
                                                value={facility.name}
                                                onChange={(e) =>
                                                    handleFacilityChange(
                                                        index,
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <input
                                                type="number"
                                                placeholder="Facility Price (in Rupiahs)"
                                                className="mt-1 p-2 w-1/4 border rounded-md"
                                                value={facility.price}
                                                onChange={(e) =>
                                                    handleFacilityChange(
                                                        index,
                                                        "price",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                                onClick={() =>
                                                    handleRemoveFacility(index)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                                        onClick={handleAddFacility}
                                    >
                                        Add Facility
                                    </button>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                        disabled={processing}
                                    >
                                        {processing ? "Updating..." : "Update"}
                                    </button>
                                    <Link
                                        href={route("admin.airlines")}
                                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
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

export default EditAirline;
