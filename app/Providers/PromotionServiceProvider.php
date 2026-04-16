<?php

namespace App\Providers;

use App\Services\PromotionService;
use App\Services\PromotionServiceInterface;
use Illuminate\Support\ServiceProvider;

class PromotionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            PromotionServiceInterface::class,
            PromotionService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
