<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Ticket::all();
        $source_airport_id = 2;
        $destination_airport_id = 3;
        $depature_date = '2023-11-03';
        $userClassChoice = 4;
        $countTicket = 1;
        $classType = '';

        switch ($userClassChoice) {
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


        $ticket = DB::table('tickets')
            ->join('routes', 'tickets.route_id', '=', 'routes.id')
            ->where('routes.source_airport_id', '=', $source_airport_id)
            ->where('routes.destination_airport_id', '=', $destination_airport_id)
            ->join('seats', 'routes.seat_id', '=', 'seats.id')
            ->whereDate('routes.departure', $depature_date)
            ->where('seats.' . $classType, '>', $countTicket)
            ->get();

        return $ticket;

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
