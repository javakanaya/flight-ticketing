<?php

namespace App\Repositories;

use App\Repositories\PromotionRepositoryInterface;
use App\Models\Promotion;

class PromotionRepository implements PromotionRepositoryInterface
{
    public function getAllPromotion()
    {
        return Promotion::all();
    }
}

