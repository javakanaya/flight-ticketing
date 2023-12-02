<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Ticket;
use App\Models\Country;
use App\Models\Passenger;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class TransactionController extends Controller
{
    public function show(Request $request)
    {
        // dd($request);
        // dd($request['travellers']);
        
        $ticket = Ticket::find($request['ticketId']);
        $countries = Country::all();

        // dd($ticket);

        // Map class number to class type
        $classTypes = [1 => 'first', 2 => 'business', 3 => 'premium_economy', 4 => 'economy'];
        $classType = $classTypes[$ticket->class] ?? 'economy';

        $departureTimestamp = Carbon::parse($ticket->route->departure, $ticket->route->source_airport->timezone);
        $arrivalTimestamp = Carbon::parse($ticket->route->arrival, $ticket->route->destination_airport->timezone);

        // Calculate the duration using Carbon's helper method
        $duration = $departureTimestamp->diff($arrivalTimestamp)->format('%hh %im');

        // Extract departure time (hours and minutes)
        $departureTime = $departureTimestamp->format('H:i');

        // Extract arrival time (hours and minutes)
        $arrivalTime = $arrivalTimestamp->format('H:i');
        return Inertia::render($request['routeTo'], [
            'ticketId' => $ticket->id,
            'source_city' => $ticket->route->source_airport->city->name,
            'source_IATA' => $ticket->route->source_airport->IATA,
            'destination_city' => $ticket->route->destination_airport->city->name,
            'destination_IATA' => $ticket->route->destination_airport->IATA,
            'duration' => $duration,
            'airline' => $ticket->route->airline->name,
            'departureTime' => $departureTime,
            'arrivalTime' => $arrivalTime,
            'classtype' => $classType,
            'nationalities' => $countries,
            'price' => $ticket->price,
            'adultCount' => $request['adultCount'],
            'kidCount' => $request['kidCount'],
            'infantCount' => $request['infantCount'],
            'travellers' => $request['travellers'] ? $request['travellers'] : null,
            'facilities' => $request['facilities'] ? $request['facilities'] : null, 
        ]);
    }

    public function storeTransaction(Request $request)
    {

        // dd($request);
        // $request->validate([
        //     'ticket_id' => 'required|integer', // Assuming 'ticket_id' is in the request

        //     'passenger.*.first_name' => 'required|string',
        //     'passenger.*.last_name' => 'required|string',
        // ]);

        // // Create a transaction
        // $transaction = Transaction::create([
        //     'count' => count($request['passenger']),
        //     'ticket_id' => $request['ticket_id'], // Replace with the actual ticket ID
        //     'user_id' => auth()->user()->id, // Assuming the user is authenticated
        // ]);

        // // Get the transaction ID
        // $transactionId = $transaction->id;

        // // Iterate through passengers and insert into the passenger table
        // foreach ($request['passenger'] as $passengerData) {
        //     Passenger::create([
        //         'title' => $passengerData['title'],
        //         'first_name' => $passengerData['first_name'],
        //         'last_name' => $passengerData['last_name'],
        //         'transaction_id' => $transactionId,
        //     ]);

            
        // }

        // return redirect('/');
    }


    public function addFacilities(Request $request)
    {

    }

    public function editTransaction(Request $request)
    {
        // dd($request);
        return redirect('/');
    }

}