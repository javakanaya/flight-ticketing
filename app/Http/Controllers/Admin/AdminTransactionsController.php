<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminTransactionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Assuming you want to paginate with 10 items per page
        $transactions = Transaction::with(['user']) // Order by the latest created_at by default
            ->paginate(10);

        return Inertia::render('Admin/Transactions/Index', [
            'transactions' => $transactions,
            'success' => session('success'),
            'errors' => session('errors'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        $user = User::find($transaction->user_id);

        $transaction = DB::table('transactions')
        ->where('transactions.id', '=', $transaction->id)
        ->join('tickets', 'transactions.ticket_id', '=', 'tickets.id')
        ->join('routes', 'tickets.route_id', '=', 'routes.id')
        ->join('airlines', 'routes.airline_id', '=', 'airlines.id')
        ->join('airports as source_airport', 'routes.source_airport_id', '=', 'source_airport.id')
        ->join('airports as destination_airport', 'routes.destination_airport_id', '=', 'destination_airport.id')
        ->join('cities as source_city', 'source_airport.city_id', '=', 'source_city.id')
        ->join('cities as destination_city', 'destination_airport.city_id', '=', 'destination_city.id')
        ->select(
            'source_airport.id as source_airport_id',
            'source_airport.name as source_airport_name',
            'source_airport.IATA as source_airport_IATA',
            'source_airport.timezone as source_airport_timezone',
            'source_city.name as source_city_name',
            'destination_airport.id as destination_airport_id',
            'destination_airport.name as destination_airport_name',
            'destination_airport.IATA as destination_airport_IATA',
            'destination_airport.timezone as destination_airport_timezone',
            'destination_city.name as destination_city_name',
            'transactions.created_at as created_date',
            'transactions.updated_at as updated_date',
            'transactions.status as status',
            'transactions.total_price as total_price',
            'tickets.price as ticket_price',
            'transactions.count as count',
            'transactions.id as id',
            'transactions.user_id as user_id',
            'transactions.is_travel_assurance as is_travel_assurance',
            'transactions.is_delay_assurance as is_delay_assurance',
            'routes.id as route_id',
            'routes.departure as departure_date',
            'routes.arrival as arrival_date',
            'airlines.name as airline_name',
            'airlines.IATA as airline_IATA',
        )
        ->get()->first();

    if (!$transaction) {
        // Handle the case where the transaction is not found
        abort(404);
    }

    // dd($user);
    if (auth()->user()->is_admin === false) {
        abort(403);
    }

    // dd($transaction[0]->is_delay_assurance);

    $passengers = DB::table('passengers')
        ->join('transactions', 'passengers.transaction_id', '=', 'transactions.id')
        ->leftJoin('facility_passenger', 'facility_passenger.passenger_id', '=', 'passengers.id')
        ->leftJoin('facilities', 'facilities.id', '=', 'facility_passenger.facility_id')
        ->select(
            'passengers.id as id',
            'passengers.title as title',
            'passengers.first_name as first_name',
            'passengers.last_name as last_name',
            'facilities.name as facility_name',
            'facilities.price as facility_price',
        )
        ->where('transactions.id', '=', $transaction->id)
        ->get();

    // Fetch assurance prices
    $travelAssurancePrice = $transaction->is_travel_assurance ? 100000 : 0;
    $delayAssurancePrice = $transaction->is_delay_assurance ? 100000 : 0;

        return Inertia::render('Admin/Transactions/Show', [
            'transaction' => $transaction,
            'userData' => $user,
            'passengers' => $passengers,
            'travelAssurancePrice' => $travelAssurancePrice,
            'delayAssurancePrice' => $delayAssurancePrice,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
