// resources/js/Pages/Products/Index.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, router } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Index = ({ flightRoutes, auth }) => {
    const deletePost = async (id) => {
        Inertia.delete(`/admin/routes/${id}`);
    };

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex justify-between items-center">
                    Routes
                    <Link
                        href={ route('admin.routes.create') }
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
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
                            {/* ... Your success and failed message components go here ... */}
                            <table className="border-collapse table-auto w-full text-sm">
                                <thead>
                                    <tr>
                                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Source
                                        </th>
                                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Destination
                                        </th>
                                        <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Airlines
                                        </th>
                                        <th className="border-b flex items-center justify-end font-medium p-4 pl-8 pt-0 pb-3 text-slate-900 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {flightRoutes.map((flightRoute) => (
                                        <tr key={flightRoute.id}>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {
                                                    flightRoute.source_airport
                                                        .name
                                                }
                                            </td>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {
                                                    flightRoute
                                                        .destination_airport
                                                        .name
                                                }
                                            </td>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {flightRoute.airline.name}
                                            </td>
                                            <td className="flex items-center justify-end border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                <Link
                                                    href={route(
                                                        "admin.routes.show",
                                                        flightRoute.id
                                                    )}
                                                    className="mx-2 border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md"
                                                >
                                                    SHOW
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "admin.routes.edit",
                                                        flightRoute.id
                                                    )}
                                                    className="mx-2 border border-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded-md"
                                                >
                                                    EDIT
                                                </Link>
                                                <button
                                                    type="submit"
                                                    className="mx-2 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md"
                                                    onClick={() =>
                                                        deletePost(
                                                            flightRoute.id
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
