<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\PromotionRepositoryInterface;
use App\Repositories\PromotionRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            PromotionRepositoryInterface::class,
            PromotionRepository::class
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
