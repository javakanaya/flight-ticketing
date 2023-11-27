import AdminLayout from "@/Layouts/AdminLayout";
import { useForm } from "@inertiajs/react";

const Edit = ({ flightRoute, auth, airports }) => {
    const { data, setData, post } = useForm({
        ...flightRoute, // Populate form with existing data
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the form submission
        post(route("admin.routes.update", flightRoute.id), {
            onSuccess: () => {
                // Handle success, e.g., redirect to show page
                // You may need to customize this based on your app's flow
            },
        });
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
                            <form onSubmit={handleSubmit}>

                                <div className="mb-4">
                                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700">
                                        Departure
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="departure"
                                        name="departure"
                                        value={data.departure || ""}
                                        onChange={(e) => setData("departure", e.target.value)}
                                        className="mt-1 p-2 border w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="arrival" className="block text-sm font-medium text-gray-700">
                                        Arrival
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="arrival"
                                        name="arrival"
                                        value={data.arrival || ""}
                                        onChange={(e) => setData("arrival", e.target.value)}
                                        className="mt-1 p-2 border w-full"
                                    />
                                </div>
                                {/* Add other fields as needed */}
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Edit;
