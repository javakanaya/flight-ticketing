import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

const ShowAirline = ({ airline, auth }) => {
  console.log(airline);
  return (
    <AdminLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Airline Detail
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">Name</h2>
                <p className="mt-1 text-sm text-gray-600">{airline.name}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">IATA Code</h2>
                <p className="mt-1 text-sm text-gray-600">{airline.IATA}</p>
              </div>
              {/* Add other fields as needed */}

              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Created At
                </h2>
                <p className="mt-1 text-sm text-gray-600">{airline.created_at}</p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Updated At
                </h2>
                <p className="mt-1 text-sm text-gray-600">{airline.updated_at}</p>
              </div>
              <Link
                href={route("admin.airlines")}
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

export default ShowAirline;
