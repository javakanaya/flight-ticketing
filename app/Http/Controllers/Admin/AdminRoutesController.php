<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Models\Ticket;
use App\Models\Airport;
use App\Models\Airline;
use App\Models\Seat;
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
        $airports = Airport::all();
        $airlines = Airline::all();
        return Inertia::render('Admin/Routes/Create', [
            'airports' => $airports,
            'airlines' => $airlines,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            // Add validation rules for other fields
            'economy_price' => 'required|numeric',
            'premium_economy_price' => 'required|numeric',
            'business_price' => 'required|numeric',
            'first_class_price' => 'required|numeric',
            'economy_seat_count' => 'required|integer',
            'premium_economy_seat_count' => 'required|integer',
            'business_seat_count' => 'required|integer',
            'first_class_seat_count' => 'required|integer',
        ]);

        // Create seats for each class
        $seat = Seat::create([
            'first' => $request->input('first_class_seat_count'),
            'business' => $request->input('business_seat_count'),
            'premium_economy' => $request->input('premium_economy_seat_count'),
            'economy' => $request->input('economy_seat_count'),
        ]);

        // Create a new route
        $route = Route::create([
            'departure' => $request->input('departure'),
            'arrival' => $request->input('arrival'),
            'source_airport_id' => $request->input('source_airport_id'),
            'destination_airport_id' => $request->input('destination_airport_id'),
            'airline_id' => $request->input('airline_id'),
            'seat_id' => $seat->id,
        ]);

        // Create tickets for the route
        Ticket::create([
            'route_id' => $route->id,
            'class' => 4,
            'price' => $request->input('economy_price'),
        ]);

        Ticket::create([
            'route_id' => $route->id,
            'class' => 3,
            'price' => $request->input('premium_economy_price'),
        ]);

        Ticket::create([
            'route_id' => $route->id,
            'class' => 2,
            'price' => $request->input('business_price'),
        ]);

        Ticket::create([
            'route_id' => $route->id,
            'class' => 1,
            'price' => $request->input('first_class_price'),
        ]);


        // You can add a response or redirect logic here

        return redirect()->route('admin.routes')->with('success', 'Route created successfully');

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
        // delete di tabel
        // dd($route);
        $destory = $route->delete();
        if ($destory) {
            // add flash for the success notification
            return redirect()->route('admin.routes')->with('success', 'Product has been deleted!');
        }

        return redirect()->route('admin.routes')->with('Failed', 'Error deleting product');
    }
}
