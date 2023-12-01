<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Airline;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;

class AdminAirlinesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $airlines = Airline::orderBy('IATA')->get();
    
        return Inertia::render('Admin/Airlines/Index', [
            'airlines' => $airlines,
            'success' => session('success'),
            'errors' => session('error'),
        ]);
    }
    
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Airlines/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'IATA' => 'required|string|max:3|unique:airlines,IATA',
            'facilities' => 'nullable|array',
            'facilities.*.name' => 'required|string|max:255',
            'facilities.*.price' => 'required|numeric',
            // Add other validation rules for additional fields
        ]);

        // Create a new airline
        $airline = Airline::create([
            'name' => $request->input('name'),
            'IATA' => strtoupper($request->input('IATA')),
            // Add other fields as needed
        ]);

        // Attach facilities to the created airline
        $facilities = $request->input('facilities', []);
        $airline->facilities()->createMany($facilities);

        return redirect()->route('admin.airlines')->with('success', 'Airline '. $request->input('name') . ' created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Airline $airline)
    {
        $airline->load('facilities');

        return Inertia::render('Admin/Airlines/Show', [
            'airline' => $airline
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit(Airline $airline)
    {
        $airline->load('facilities');
        return Inertia::render('Admin/Airlines/Edit', [
            'airline' => $airline,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

     public function update(Request $request, Airline $airline)
     {
         // Validate the incoming request data
         $request->validate([
             'name' => 'required|string|max:255',
             'IATA' => 'required|string|max:3',
             'facilities' => 'nullable|array',
             'facilities.*.name' => 'required|string|max:255',
             'facilities.*.price' => 'required|numeric',
             // Add other validation rules for additional fields
         ]);
 
         // Update the airline
         $airline->update([
             'name' => $request->input('name'),
             'IATA' => strtoupper($request->input('IATA')),
             // Add other fields as needed
         ]);
 
         // Sync facilities for the updated airline
         $facilities = $request->input('facilities', []);
         $airline->facilities()->delete(); // Delete existing facilities
         $airline->facilities()->createMany($facilities);
 
         return redirect()->route('admin.airlines')->with('success', 'Airline ' . $request->input('name') .' updated successfully');
     }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Airline $airline)
    {
        try {
            // Check if the airline is connected to any routes
            if ($airline->routes()->exists()) {
                return redirect()->route('admin.airlines')->with('error', 'Cannot delete the airline because it is connected to one or more routes');
            }
    
            // If not connected to any routes, attempt to delete the airline
            $airline->delete();
    
            // If successful, redirect with success message
            return redirect()->route('admin.airlines')->with('success', 'Airline deleted successfully');
        } catch (ModelNotFoundException $e) {
            // Handle the case where the airline is not found
            return redirect()->route('admin.airlines')->with('error', 'Airline not found');
        } catch (QueryException $e) {
            // Handle other database-related errors
            return redirect()->route('admin.airlines')->with('error', 'Error deleting the airline');
        }
    }

}
