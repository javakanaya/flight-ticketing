import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ airlines, auth, success, errors }) => {
    const deleteAirline = async (id) => {
        try {
            await Inertia.delete(`/admin/airlines/${id}`);
            // Handle success, e.g., show a success toast
        } catch (error) {
            // Handle errors, e.g., show an error toast
            if (error.response.status === 422 && error.response.data.warning) {
                // Show a warning toast
                console.warn(error.response.data.warning);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex justify-between items-center">
                    Airlines
                    <Link
                        href={route("admin.airlines.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        + ADD
                    </Link>
                </h2>
            }
        >
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

                            <table className="border-collapse table-auto w-full text-sm">
                                <thead>
                                    <tr>
                                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Name
                                        </th>
                                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            IATA
                                        </th>
                                        <th className="border-b flex items-center justify-end font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {airlines.map((airline) => (
                                        <tr key={airline.id}>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {airline.name}
                                            </td>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {airline.IATA}
                                            </td>
                                            <td className="flex items-center justify-end border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                <Link
                                                    href={route(
                                                        "admin.airlines.show",
                                                        airline.id
                                                    )}
                                                    className="mx-2 border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md"
                                                >
                                                    SHOW
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.airlines.edit",
                                                        airline.id
                                                    )}
                                                    className="mx-2 border border-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md"
                                                >
                                                    EDIT
                                                </Link>
                                                <button
                                                    type="submit"
                                                    className="mx-2 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md"
                                                    onClick={() =>
                                                        deleteAirline(
                                                            airline.id
                                                        )
                                                    }
                                                >
                                                    DELETE
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
