import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";

const EditAirline = ({ airline, auth }) => {
  const { data, setData, errors, put, processing } = useForm({
    name: airline.name,
    IATA: airline.IATA,
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    put(route('admin.airlines.update', airline.id));
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
                  <label htmlFor="name" className="text-lg font-medium text-gray-900">
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
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="IATA" className="text-lg font-medium text-gray-900">
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
                    <p className="text-red-500 text-sm mt-1">{errors.IATA}</p>
                  )}
                </div>

                {/* Add other fields as needed */}

                <div className="flex items-center justify-between mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    disabled={processing}
                  >
                    {processing ? 'Updating...' : 'Update'}
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
