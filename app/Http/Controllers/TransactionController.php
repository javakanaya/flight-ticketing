<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Inertia\Inertia;
use App\Models\Ticket;
use App\Models\Country;
use App\Models\Passenger;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Jobs\ProcessTransactionPayment;
use App\Jobs\ProcessTransactionCancelation;

class TransactionController extends Controller
{
    public function show(Request $request)
    {
        // dd($request['facilities']);
        
        $ticket = Ticket::find($request['ticketId']);
        $countries = Country::all();

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
            // 'facilities' => $ticket->route->facilites,
            'facilities' => $request['facilities'] ? $request['facilities'] : null,
        ]);
    }

    public function storeTransaction(Request $request)
    {
        $data = $request->input('data');

        $facilities = $data['facilities'];
        $travellers = $data['travellers'];

        $selectedTicket = Ticket::findOrFail($data['priceBar'][0]['id']);
        $ticketClass = $selectedTicket->class;

        // Calculate total price based on ticket price, assurance, and facilities
        $ticketPrice = ($selectedTicket->price) * count($travellers);
        $assurancePrice = (($data['priceBar'][1]['name'] !== null ? 1 : 0) * 100000) * count($travellers);
        $travelAssurancePrice = (($data['priceBar'][2]['name'] !== null ? 1 : 0) * 100000) * count($travellers);

        // Calculate facilities price
        $facilitiesPrice = 0;
        foreach ($facilities as $facility) {
            $facilitiesPrice += $facility['price'] * $facility['isChecked'];
        }

        // Calculate total price
        $totalPrice = $ticketPrice + $assurancePrice + $travelAssurancePrice + $facilitiesPrice;


        // Create a new transaction record
        $transaction = Transaction::create([
            'count' => count($travellers),
            'ticket_id' => $data['priceBar'][0]['id'],
            'user_id' => auth()->user()->id,
            'status' => 0, // Set the initial status as unpaid or as needed
            'total_price' => $totalPrice,
            'is_travel_assurance' => $data['priceBar'][1]['name'] !== null,
            'is_delay_assurance' => $data['priceBar'][2]['name'] !== null,
        ]);

        // Update seats count for the selected class
        $seats = Seat::find($selectedTicket->route->seat_id);
        switch ($ticketClass) {
            case 1:
                $seats->first -= count($travellers);
                break;
            case 2:
                $seats->business -= count($travellers);
                break;
            case 3:
                $seats->premium_economy -= count($travellers);
                break;
            case 4:
                $seats->economy -= count($travellers);
                break;
            // Add more cases if you have more classes
        }
        $seats->save();
        

        // Iterate through the facilities and associate them with passengers
        foreach ($travellers as $index => $passenger) {
            $passengerData = $passenger; // Convert the passenger model to an array


            // Create the updated passenger with transaction_id
            $updatedPassenger = Passenger::create([
                'title' => $passengerData['title'],
                'first_name' => $passengerData['first_name'],
                'last_name' => $passengerData['last_name'],
                'transaction_id' => $transaction->id,
            ]);
            // dd($updatedPassenger);
            // Check if $facilities is not empty and if the index exists in $facilities
            if (!empty($facilities) && array_key_exists($index, $facilities)) {
                $facility = $facilities[$index];
                $facilityId = $facility['id'];
                $isChecked = $facility['isChecked'];

                // Check if the facility is selected
                if ($isChecked && $facilityId != -1) {
                    $updatedPassenger->facilities()->attach($facilityId);
                }
            }
        }

        // Continue processing the transaction and storing data...

        // Pass the transaction ID to the next request using the with method
        return redirect()->route('home')->with(['showTransactionMessage' => true, 'transactionId' => $transaction->id]);
    }



    public function payTransaction(request $request)
    {
        $id = intval($request->input('id'));
        // Retrieve the transaction by ID
        $transaction = Transaction::find($id);

        // Update the status from 0 (unpaid) to 1 (processing)
        $transaction->update(['status' => 1]);

        $user = auth()->user();

        // Dispatch the job with the transaction ID
        ProcessTransactionPayment::dispatch($transaction->id, $user->name, env('APP_URL'), $user->email);

        // Return a response to the frontend
        // Set a message in the session
        session()->flash('payment_message', [
            'type' => 'success', // or 'error' for example
            'content' => 'Payment process initiated',
        ]);


        // Redirect back to the booking details page
        return redirect()->route('profile.transaction.detail', ['id' => $id]);
    }


    public function cancelTransaction(request $request)
    {
        $id = intval($request->input('id'));

        // Retrieve the transaction by ID
        $transaction = Transaction::find($id);

        // Update the status from 0 (unpaid) to 1 (processing)
        $transaction->update(['status' => 1]);

        $user = auth()->user();

        // Dispatch the job with the transaction ID
        ProcessTransactionCancelation::dispatch($transaction->id, $user->name, env('APP_URL'), $user->email);

        // Return a response to the frontend
        // Set a message in the session
        session()->flash('payment_message', [
            'type' => 'success', // or 'error' for example
            'content' => 'Cancelation process initiated',
        ]);


        // Redirect back to the booking details page
        return redirect()->route('profile.transaction.detail', ['id' => $id]);

    }

}
