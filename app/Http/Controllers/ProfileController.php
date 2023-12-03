<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\DB;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function transaction()
    {
        $user = auth()->user();

        $transactions = DB::table('transactions')
            ->join('tickets', 'transactions.ticket_id', '=', 'tickets.id')
            ->join('routes', 'tickets.route_id', '=', 'routes.id')
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
                'transactions.status as status',
                'transactions.total_price as total_price',
                'transactions.count as count',
                'transactions.id as id'
            )
            ->where('transactions.user_id', '=', $user->id)
            ->get();

        return Inertia::render('Profile/Bookings', [
            'user' => $user,
            'transactions' => $transactions,
        ]);
    }

    public function showTransaction($id)
    {
        $user = auth()->user();

        $transaction = DB::table('transactions')
            ->where('transactions.id', '=', $id)
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
                'transactions.is_travel_assurance as is_travel_assurance',
                'transactions.is_delay_assurance as is_delay_assurance',
                'routes.id as route_id',
                'routes.departure as departure_date',
                'routes.arrival as arrival_date',
                'airlines.name as airline_name',
                'airlines.IATA as airline_IATA',
            )
            ->get();

        if (!$transaction) {
            // Handle the case where the transaction is not found
            abort(404);
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
            ->where('transactions.id', '=', $id)
            ->get();

        // Fetch assurance prices
        $travelAssurancePrice = $transaction[0]->is_travel_assurance ? 100000 : 0;
        $delayAssurancePrice = $transaction[0]->is_delay_assurance ? 100000 : 0;

        // dd($passengers);

        return Inertia::render('Profile/BookingDetails', [
            'user' => $user,
            'transaction' => $transaction[0],
            'passengers' => $passengers,
            'travelAssurancePrice' => $travelAssurancePrice,
            'delayAssurancePrice' => $delayAssurancePrice,
            'message' => session()->pull('payment_message', null), // Retrieve and clear the payment message from the session
        ]);
    }
}

