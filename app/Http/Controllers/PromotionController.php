<?php 

// app/Http/Controllers/CardController.php

namespace App\Http\Controllers;

use App\Services\PromotionServiceInterface;

class PromotionController extends Controller
{
    protected $promotionService;

    public function __construct(PromotionServiceInterface $promotionService)
    {
        $this->promotionService = $promotionService;
    }

    public function index()
    {
        $cards = $this->promotionService->getAllPromotion();
        return view('cards.index', compact('cards'));
    }
}
