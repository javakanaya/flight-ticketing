<?php

namespace App\Http\Controllers;

use App\Models\Airline;
use App\Models\Airport;
use App\Models\Facility;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Ticket::all();
    }

    public function search(Request $request)
    {
        // Handle default values if no input provided  
        if (!$request->input()) {
            // Set default values
            $sourceAirportId = 1;
            $destinationAirportId = 2;
            $departureDate = now()->format('Y-m-d');
            $countTicket = 1;
        } else {
            // Validate the request
            $validatedRequest = $request->validate([
                'sourceAirport' => 'required',
                'destAirport' => 'required',
                'adultCount' => 'required|integer|min:0',
                'kidCount' => 'required|integer|min:0',
                'infantCount' => 'required|integer|min:0',
                'departureDate' => 'required|date',
                'returnDate' => 'nullable|date|after:departureDate',
            ]);
            // Extract values from the validated request
            $sourceAirportId = intval($validatedRequest['sourceAirport']);
            $destinationAirportId = intval($validatedRequest['destAirport']);
            $departureDate = strval($validatedRequest['departureDate']);
            $countTicket = ($validatedRequest['adultCount'] + $validatedRequest['kidCount'] + $validatedRequest['infantCount']);
            // $classNum = intval($validatedRequest['class']);
        }

        // Map class number to class type
        $classTypes = [1 => 'first', 2 => 'business', 3 => 'premium_economy', 4 => 'economy'];
        // $classType = $classTypes[$classNum] ?? 'economy';


        // Retrieve all tickets based on the input
        $allTicket = DB::table('tickets')
            ->select('tickets.id', 'tickets.price', 'routes.departure', 'routes.arrival', 'routes.airline_id', 'routes.seat_id', 'tickets.class')
            ->join('routes', 'tickets.route_id', '=', 'routes.id')
            ->join('seats', 'routes.seat_id', '=', 'seats.id')
            ->whereDate('routes.departure', $departureDate)
            ->where('routes.source_airport_id', '=', $sourceAirportId)
            ->where('routes.destination_airport_id', '=', $destinationAirportId)
            ->where('seats.' . $classTypes[1], '>', $countTicket) // first class
            ->orWhere('seats.' . $classTypes[2], '>', $countTicket) // business class
            ->orWhere('seats.' . $classTypes[3], '>', $countTicket) // premium economy class
            ->orWhere('seats.' . $classTypes[4], '>', $countTicket) // economy class
            ->get();

        // Retrieve source and destination airports
        $sourceAirport = Airport::find($sourceAirportId);
        $destinationAirport = Airport::find($destinationAirportId);

        // Calculate duration and fetch airline information
        foreach ($allTicket as $ticket) {
            $departureTimestamp = Carbon::parse($ticket->departure, $sourceAirport->timezone);
            $arrivalTimestamp = Carbon::parse($ticket->arrival, $destinationAirport->timezone);

            // Calculate the duration using Carbon's helper method
            $ticket->duration = $departureTimestamp->diff($arrivalTimestamp)->format('%hh %im');

            // Extract departure time (hours and minutes)
            $ticket->departureTime = $departureTimestamp->format('H:i');

            // Extract arrival time (hours and minutes)
            $ticket->arrivalTime = $arrivalTimestamp->format('H:i');

            // Fetch airline information
            $ticket->airline = Airline::select('name')->find($ticket->airline_id);

            $ticket->facilities = DB::table('facilities')
            ->select('facilities.id', 'facilities.name', 'facilities.price')
            ->where('facilities.airline_id', '=', $ticket->airline_id)
            ->get();

        }

        $allTicket = collect($allTicket)
            ->sortBy('duration')
            ->sortBy('price')
            ->values()
            ->all();
        

        return Inertia::render('Flights', [
            'sourceAirport' => $sourceAirport,
            'destinationAirport' => $destinationAirport,
            'tickets' => $allTicket,
            'adultCount' => $validatedRequest['adultCount'] ?? 1,
            'kidCount' => $validatedRequest['kidCount'] ?? 0,
            'infantCount' => $validatedRequest['infantCount'] ?? 0,
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
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
