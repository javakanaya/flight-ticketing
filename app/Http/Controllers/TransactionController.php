<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Ticket;
use App\Models\Passenger;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class TransactionController extends Controller
{
    public function show($id)
    {
        $ticket = Ticket::find($id);

        $classType = "";

        switch ($ticket->class) {
            case 1:
                $classType = "first";
                break;
            case 2:
                $classType = "business";
                break;
            case 3:
                $classType = "premium_economy";
                break;
            case 4:
                $classType = "economy";
                break;
            default:
                $classType = "economy";
        }

        $departureTimestamp = Carbon::parse($ticket->route->departure, $ticket->route->source_airport->timezone);
        $arrivalTimestamp = Carbon::parse($ticket->route->arrival, $ticket->route->destination_airport->timezone);

        // Calculate the duration in minutes
        $duration = $departureTimestamp->floatDiffInMinutes($arrivalTimestamp);

        // Calculate hours and minutes
        $hours = floor($duration / 60);
        $minutes = $duration % 60;

        // Format the duration as "XX hours YY minutes"
        if ($hours == 0)
            $duration = $minutes . 'm';
        else
            $duration = $hours . 'h ' . $minutes . 'm';

        return Inertia::render('Transaction', [
            'source_city' => $ticket->route->source_airport->city->name,
            'source_IATA' => $ticket->route->source_airport->IATA,
            'destination_city' => $ticket->route->destination_airport->city->name,
            'destination_IATA' => $ticket->route->destination_airport->IATA,
            'duration' => $duration,
            'airline' => $ticket->route->airline->name,
            'departure' => $ticket->route->departure,
            'arrival' => $ticket->route->arrival,
            'classtype' => $classType,
        ]);
    }

    public function makeTransaction($request)
    {
        $request->validate([
            'ticket_id' => 'required|integer', // Assuming 'ticket_id' is in the request
    
            'passenger.*.first_name' => 'required|string',
            'passenger.*.last_name' => 'required|string',
            'passenger.*.phone' => 'required|string',
            'passenger.*.email' => 'required|email',
        ]);

        // Create a transaction
        $transaction = Transaction::create([
            'count' => count($request['passenger']),
            'ticket_id' => $request['ticket_id'], // Replace with the actual ticket ID
            'user_id' => auth()->user()->id, // Assuming the user is authenticated
        ]);

        // Get the transaction ID
        $transactionId = $transaction->id;

        // Iterate through passengers and insert into the passenger table
        foreach ($request['passenger'] as $passengerData) {
            Passenger::create([
                'name' => $passengerData['first_name'] . ' ' . $passengerData['last_name'],
                'transaction_id' => $transactionId,
            ]);
        }

        return redirect('/');
    }
}
