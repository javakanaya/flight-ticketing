<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Airport;
use App\Models\City;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $airports = Airport::with('city')->get();
   
        if (request()->is('dashboard')) {
            return Inertia::render('Home', [
                'airports' => $airports,
            ]);
        } else {
            return Inertia::render('Home', [
                'canLogin'    => route('login'),
                'canRegister' => route('register'),
                'airports' => $airports,
            ]);
        }
    }


}
