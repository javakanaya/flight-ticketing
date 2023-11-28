// resources/js/Pages/Airlines/Create.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const CreateAirline = ({ auth }) => {
    const { data, setData, post, errors } = useForm({
        name: '',
        IATA: '',
        // Add other fields as needed
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('admin.airlines.store'), {
            onSuccess: () => {
                // Redirect or handle success as needed
            },
        });
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Airline
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="IATA" className="block text-sm font-medium text-gray-600">
                                        IATA Code
                                    </label>
                                    <input
                                        id="IATA"
                                        type="text"
                                        maxLength="3"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={data.IATA}
                                        onChange={(e) => setData('IATA', e.target.value.toUpperCase())}
                                        required
                                    />
                                    {errors.IATA && (
                                        <p className="text-red-500 text-xs mt-1">{errors.IATA}</p>
                                    )}
                                </div>
                                {/* Add other fields as needed */}
                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Create
                                    </button>
                                    <Link
                                        href={route('admin.airlines')}
                                        className="text-blue-500 hover:underline"
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

export default CreateAirline;
