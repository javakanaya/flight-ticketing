<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Routes;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRoutesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $routes = Routes::all();

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
    public function show(Routes $routes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Routes $routes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Routes $routes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Routes $routes)
    {
        //
    }
}
