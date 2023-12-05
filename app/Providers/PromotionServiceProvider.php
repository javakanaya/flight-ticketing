<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class PromotionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            \App\Services\PromotionServiceInterface::class,
            \App\Services\PromotionService::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
