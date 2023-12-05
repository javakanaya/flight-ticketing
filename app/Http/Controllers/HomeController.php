<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Airport;
use App\Models\City;
use Illuminate\Http\Request;
use App\Services\PromotionServiceInterface;

class HomeController extends Controller
{   
    protected $promotionService;

    public function __construct(PromotionServiceInterface $promotionService)
    {
        $this->promotionService = $promotionService;
    }

    public function index()
    {
        $cards = $this->promotionService->getAllPromotion();
        $airports = Airport::with('city')->get();

        return Inertia::render('Home', [
            'promotions' => $cards,
            'airports' => $airports,
            'showTransactionMessage' => session('showTransactionMessage'),
            'transactionId' => session('transactionId'),
        ]);
    }


}
