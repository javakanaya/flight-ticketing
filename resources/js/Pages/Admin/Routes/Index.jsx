// resources/js/Pages/Products/Index.jsx
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

const Index = ({ flightRoutes, auth, success, errors }) => {
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

    const renderPaginationLink = (link, index) => (
        <Link
            key={index}
            href={link.url}
            dangerouslySetInnerHTML={{ __html: link.label }}
            className={`flex items-center justify-center px-3 h-8 ${
                link.active
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                    : "text-gray-500 bg-white hover:bg-gray-100"
            } border border-gray-300 ${
                index === 0
                    ? "rounded-s-lg"
                    : index === flightRoutes.links.length - 1
                    ? "rounded-e-lg"
                    : ""
            }`}
        />
    );

    const RenderPagination = () => (
        <nav aria-label="">
            <ul className="mt-3 inline-flex -space-x-px text-sm">
                {flightRoutes.links.map((link, index) =>
                    renderPaginationLink(link, index)
                )}
            </ul>
        </nav>
    );

    return (
        <AdminLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight flex justify-between items-center">
                    Routes
                    <Link
                        href={route("admin.routes.create")}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                        + ADD
                    </Link>
                </h2>
            }
        >
            <Head title="Routes" />
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
                                    {flightRoutes.data.map((flightRoute) => (
                                        <tr key={flightRoute.id}>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {
                                                    flightRoute.source_airport
                                                        .name
                                                }
                                            </td>
                                            <td className="border-b border-slate-100 p-4 pl-8 text-slate-500">
                                                {
                                                    flightRoute.destination_airport.name
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
                                                <button
                                                    type="button"
                                                    className="mx-2 border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md"
                                                    onClick={() =>
                                                        handleDeleteClick(
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
                            <RenderPagination />
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

export default Index;
