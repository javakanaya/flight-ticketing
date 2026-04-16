<?php

namespace App\Http\Controllers;

use App\Models\Airport;
use App\Services\PromotionServiceInterface;
use Inertia\Inertia;

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
