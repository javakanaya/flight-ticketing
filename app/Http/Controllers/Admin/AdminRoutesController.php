<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Route;
use App\Models\Ticket;
use App\Models\Airport;
use App\Models\Airline;
use App\Models\Seat;
use App\Models\Facility;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRoutesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Assuming you want to paginate with 10 items per page
        $routes = Route::with(['source_airport', 'destination_airport', 'airline'])
            ->latest() // Order by the latest created_at by default
            ->paginate(10);

        return Inertia::render('Admin/Routes/Index', [
            'flightRoutes' => $routes,
            'success' => session('success'),
            'errors' => session('errors'),
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
            'departure' => 'required|date',
            'arrival' => 'required|date',
            'source_airport_id' => 'required',
            'destination_airport_id' => 'required',
            'airline_id' => 'required',
            'economy_price' => 'required|numeric|gt:0',
            'premium_economy_price' => 'numeric',
            'business_price' => 'numeric',
            'first_class_price' => 'numeric',
            'economy_seat_count' => 'required|integer|gt:0',
            'premium_economy_seat_count' => 'integer',
            'business_seat_count' => 'integer',
            'first_class_seat_count' => 'integer',
        ]);

        // Create seats for each class
        $seat = Seat::create([
            'first' => $request->input('first_class_price') > 0 ? $request->input('first_class_seat_count') : 0,
            'first_original' => $request->input('first_class_price') > 0 ? $request->input('first_class_seat_count') : 0,
            'business' => $request->input('business_price') > 0 ? $request->input('business_seat_count') : 0,
            'business_original' => $request->input('business_price') > 0 ? $request->input('business_seat_count') : 0,
            'premium_economy' => $request->input('premium_economy_price') > 0 ? $request->input('premium_economy_seat_count') : 0,
            'premium_economy_original' => $request->input('premium_economy_price') > 0 ? $request->input('premium_economy_seat_count') : 0,
            'economy' => $request->input('economy_price') > 0 ? $request->input('economy_seat_count') : 0,
            'economy_original' => $request->input('economy_price') > 0 ? $request->input('economy_seat_count') : 0,
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
        // Define the updateOrInsertTicket function
        $updateOrInsertTicket = function ($class, $price) use ($route) {
            if ($price > 0) {
                // Create a new ticket
                Ticket::create([
                    'route_id' => $route->id,
                    'class' => $class,
                    'price' => $price,
                ]);
            }
        };

        // Create tickets for the route
        $updateOrInsertTicket(4, $request->input('economy_price'));
        $updateOrInsertTicket(3, $request->input('premium_economy_price'));
        $updateOrInsertTicket(2, $request->input('business_price'));
        $updateOrInsertTicket(1, $request->input('first_class_price'));


        // You can add a response or redirect logic here

        return redirect()->route(
            "admin.routes.show",
            $route->id
        )->with('success', 'Route created successfully, Add facilities via EDIT');

    }

    /**
     * Display the specified resource.
     */
    public function show(Route $route)
    {
        // Eager load the related data for the specific route
        $route->load('source_airport', 'destination_airport', 'airline', 'seat_conf');
        $facilities = $route->airline->facilities;

        // Find all tickets where route_id matches the id of the route
        $tickets = Ticket::where('route_id', $route->id)->get();
 
        // Split tickets into different classes
        $firstClassTickets = $tickets->where('class', 1)->first();
        $businessClassTickets = $tickets->where('class', 2)->first();
        $premiumEconomyTickets = $tickets->where('class', 3)->first();
        $economyTickets = $tickets->where('class', 4)->first();

        return Inertia::render('Admin/Routes/Show', [
            'flightRoute' => $route,
            'facilities' => $facilities,
            'firstClassTickets' => $firstClassTickets,
            'businessClassTickets' => $businessClassTickets,
            'premiumEconomyTickets' => $premiumEconomyTickets,
            'economyTickets' => $economyTickets,
            'success' => session('success'),
            'errors' => session('errors'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Route $route)
    {
        $route->load('airline', 'seat_conf'); 

        $airports = Airport::all();
        $airlines = Airline::all();

        // Find all tickets where route_id matches the id of the route
        $tickets = Ticket::where('route_id', $route->id)->get();

        // Split tickets into different classes
        $firstClassTickets = $tickets->where('class', 1)->first();
        $businessClassTickets = $tickets->where('class', 2)->first();
        $premiumEconomyTickets = $tickets->where('class', 3)->first();
        $economyTickets = $tickets->where('class', 4)->first();

        return Inertia::render('Admin/Routes/Edit', [
            'flightRoute' => $route,
            'airports' => $airports,
            'airlines' => $airlines,
            'firstClassTickets' => $firstClassTickets,
            'businessClassTickets' => $businessClassTickets,
            'premiumEconomyTickets' => $premiumEconomyTickets,
            'economyTickets' => $economyTickets,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Route $route)
    {
        // Validate the incoming request data
        $request->validate([
            // Add validation rules for other fields
            'economy_price' => 'required|numeric|gt:0',
            'premium_economy_price' => 'required|numeric',
            'business_price' => 'numeric',
            'first_class_price' => 'numeric',
            'economy_seat_count' => 'required|integer|gt:0',
            'premium_economy_seat_count' => 'integer',
            'business_seat_count' => 'integer',
            'first_class_seat_count' => 'integer',
            'economy_id' => 'required',
        ]);

        // Update seats for each class
        $route->seat_conf->update([
            'first' => $request->input('first_class_price') > 0 ? $request->input('first_class_seat_count') : 0,
            'business' => $request->input('business_price') > 0 ? $request->input('business_seat_count') : 0,
            'premium_economy' => $request->input('premium_economy_price') > 0 ? $request->input('premium_economy_seat_count') : 0,
            'economy' => $request->input('economy_price') > 0 ? $request->input('economy_seat_count') : 0,
        ]);

        // Update the route
        $route->update([
            'departure' => $request->input('departure'),
            'arrival' => $request->input('arrival'),
            'source_airport_id' => $request->input('source_airport_id'),
            'destination_airport_id' => $request->input('destination_airport_id'),
            'airline_id' => $request->input('airline_id'),
        ]);

        // Define a helper function to update or insert ticket
        $updateOrInsertTicket = function ($ticketId, $class, $price) use ($route) {
            if ($ticketId !== null) {
                // Existing ticket
                if ($price > 0) {
                    // Update the existing ticket
                    $route->ticket()->updateOrInsert(
                        ['id' => $ticketId],
                        ['route_id' => $route->id, 'class' => $class, 'price' => $price]
                    );
                } else {
                    // Delete the existing ticket if price is 0
                    $route->ticket()->where('id', $ticketId)->delete();
                }
            } elseif ($price > 0) {
                // New ticket
                $route->ticket()->create([
                    'route_id' => $route->id,
                    'class' => $class,
                    'price' => $price,
                ]);
            }
        };

        // Update or insert tickets for each class
        $updateOrInsertTicket($request->input('economy_id'), 4, $request->input('economy_price'));
        $updateOrInsertTicket($request->input('premium_economy_id'), 3, $request->input('premium_economy_price'));
        $updateOrInsertTicket($request->input('business_id'), 2, $request->input('business_price'));
        $updateOrInsertTicket($request->input('first_class_id'), 1, $request->input('first_class_price'));

        // You can add a response or redirect logic here
        return redirect()->route(
            "admin.routes.show",
            $route->id
        )->with('success', 'Route updated successfully');


    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(Route $route)
    {
        // Get the associated ticket IDs for the route
        $ticketIds = $route->ticket()->pluck('id')->toArray();

        // Check if any of the ticket IDs exist in transactions
        $hasTransactions = Transaction::whereIn('ticket_id', $ticketIds)->exists();

        if ($hasTransactions) {
            return redirect()->route('admin.routes')->with('error', 'Route is associated with transactions and cannot be deleted.');
        }

        // If no transactions associated, proceed with deletion
        $destroy = $route->delete();

        if ($destroy) {
            // add flash for the success notification
            return redirect()->route('admin.routes')->with('success', 'Route has been deleted!');
        }

        return redirect()->route('admin.routes')->with('failed', 'Error deleting Route');
    }

}
