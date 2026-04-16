<?php

namespace App\Repositories;

use App\Models\Promotion;

class PromotionRepository implements PromotionRepositoryInterface
{
    public function getAllPromotion()
    {
        return Promotion::all();
    }
}
