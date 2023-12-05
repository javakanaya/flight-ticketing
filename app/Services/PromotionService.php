<?php 
// app/Services/PromotionService.php

namespace App\Services;

use App\Repositories\PromotionRepositoryInterface;

use App\Services\PromotionServiceInterface;

class PromotionService implements PromotionServiceInterface
{
    protected $promotionRepository;

    public function __construct(PromotionRepositoryInterface $PromotionRepository)
    {
        $this->promotionRepository = $PromotionRepository;
    }

    public function getAllPromotion()
    {
        return $this->promotionRepository->getAllPromotion();
    }
}
