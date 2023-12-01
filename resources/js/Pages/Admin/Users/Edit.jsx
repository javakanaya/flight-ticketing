// resources/js/Pages/Users/Edit.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const EditUser = ({ user, auth }) => {
    const { data, setData, put, errors } = useForm({
        name: user.name,
        email: user.email,
        // Add other fields as needed
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('admin.users.update', user.id), {
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
                    Edit User
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
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="mt-1 p-2 w-full border rounded-md"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>
                                {/* Add other fields as needed */}
                                <div className="flex items-center justify-between mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Update
                                    </button>
                                    <Link
                                        href={route('admin.users')}
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

export default EditUser;
