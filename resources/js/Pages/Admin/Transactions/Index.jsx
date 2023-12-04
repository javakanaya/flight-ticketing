import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, Head } from "@inertiajs/react";

const Index = ({ transactions, auth }) => {
    console.log(transactions);

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
                    : index === transactions.links.length - 1
                    ? "rounded-e-lg"
                    : ""
            }`}
        />
    );

    const RenderPagination = () => (
        <nav aria-label="">
            <ul className="mt-3 inline-flex -space-x-px text-sm">
                {transactions.links.map((link, index) =>
                    renderPaginationLink(link, index)
                )}
            </ul>
        </nav>
    );

    const getStatusBadge = (status) => {
        switch (status) {
            case 0:
                return (
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                        Unpaid
                    </span>
                );
            case 1:
                return (
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                        Processing
                    </span>
                );
            case 2:
                return (
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                        Paid
                    </span>
                );
            case 3:
                return (
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                        Canceled
                    </span>
                );
            default:
                return null;
        }
    };
    return (
        <AdminLayout user={auth.user}>
            <Head title="Transaction List" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-lg font-semibold mb-6">
                                Transaction List
                            </h2>

                            {transactions.data.length === 0 ? (
                                <p className="text-gray-600">
                                    No transactions found.
                                </p>
                            ) : (
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                User
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {transactions.data.map(
                                            (transaction) => (
                                                <tr key={transaction.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {transaction.id}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {transaction.user.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        {getStatusBadge(transaction.status)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <Link
                                                            href={route(
                                                                "admin.transactions.show",
                                                                transaction.id
                                                            )}
                                                            className="text-blue-500 hover:text-blue-800"
                                                        >
                                                            View
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            )}
                            <RenderPagination />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Index;
