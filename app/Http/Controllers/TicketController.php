<?php

namespace App\Http\Controllers;

use App\Models\Airline;
use App\Models\Airport;
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
        if (!$request->input()) {
            $sourceAirportId = 1;
            $destinationAirportId = 2;
            $depatureDate = now()->format('Y-m-d');
            $countTicket = 1;
            $classNum = 4;
        } else {
            // dd(request()->all());
            $validatedRequest = $request->validate([
                'origin' => 'required',
                'destination' => 'required',
                'departure_date' => 'required|date|after_or_equal:today',
                'class' => 'required|integer|between:1,4',
                'adult' => 'required|integer',
                'child' => 'required|integer',
                'infant' => 'required|integer',
            ]);

            // dd($validatedRequest);
            $sourceAirportId = intval($validatedRequest['origin']);
            $destinationAirportId = intval($validatedRequest['destination']);
            $depatureDate = strval($validatedRequest['departure_date']);
            $countTicket = ($validatedRequest['adult'] + $validatedRequest['child']);
            $classNum = intval($validatedRequest['class']);
        }


        $classType = "";

        switch ($classNum) {
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

        $allTicket = DB::table('tickets')
            ->select('tickets.id', 'tickets.price', 'routes.departure', 'routes.arrival', 'routes.airline_id', 'routes.seat_id', 'tickets.class')
            ->join('routes', 'tickets.route_id', '=', 'routes.id')
            ->join('seats', 'routes.seat_id', '=', 'seats.id')
            ->whereDate('routes.departure', $depatureDate)
            ->where('routes.source_airport_id', '=', $sourceAirportId)
            ->where('routes.destination_airport_id', '=', $destinationAirportId)
            ->where('tickets.class', '=', $classNum)
            ->where('seats.' . $classType, '>', $countTicket)
            ->get();

        $sourceAirport = Airport::find($sourceAirportId);
        $destinationAirport = Airport::find($destinationAirportId);


        foreach ($allTicket as $ticket) {
            $departureTimestamp = Carbon::parse($ticket->departure, $sourceAirport->timezone);
            $arrivalTimestamp = Carbon::parse($ticket->arrival, $destinationAirport->timezone);

            // Calculate the duration in minutes
            $duration = $departureTimestamp->floatDiffInMinutes($arrivalTimestamp);

            // Calculate hours and minutes
            $hours = floor($duration / 60);
            $minutes = $duration % 60;

            // Format the duration as "XX hours YY minutes"
            if ($hours == 0)
                $ticket->duration = $minutes . 'm';
            else 
                $ticket->duration = $hours . 'h ' . $minutes . 'm';

            $ticket->airline = Airline::select('name')->find($ticket->airline_id);
        }

        return Inertia::render('Flights', [
            'sourceAirport' => $sourceAirport,
            'destinationAirport' => $destinationAirport,
            'tickets' => $allTicket,
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
