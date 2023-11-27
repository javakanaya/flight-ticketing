<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Models\Ticket;
use App\Models\Airport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRoutesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $routes = Route::with(['source_airport', 'destination_airport', 'airline'])->get();

        return Inertia::render('Admin/Routes/Index', [
            'flightRoutes' => $routes
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
    public function show(Route $route)
    {
        // Eager load the related data for the specific route
        $route->load('source_airport', 'destination_airport', 'airline', 'seat_conf');

        // Find all tickets where route_id matches the id of the route
        $tickets = Ticket::where('route_id', $route->id)->get();

        // Split tickets into different classes
        $firstClassTickets = $tickets->where('class', 1)->first();
        $businessClassTickets = $tickets->where('class', 2)->first();
        $premiumEconomyTickets = $tickets->where('class', 3)->first();
        $economyTickets = $tickets->where('class', 4)->first();

        return Inertia::render('Admin/Routes/Show', [
            'flightRoute' => $route,
            'firstClassTickets' => $firstClassTickets,
            'businessClassTickets' => $businessClassTickets,
            'premiumEconomyTickets' => $premiumEconomyTickets,
            'economyTickets' => $economyTickets,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Route $route)
    {
        $airports = Airport::all();

        return Inertia::render('Admin/Routes/Edit', [
            'flightRoute' => $route,
            'airports' => $airports,
        ]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Route $route)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Route $route)
    {
        //
    }
}
