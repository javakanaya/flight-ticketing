<?php

namespace App\Providers;

use App\Repositories\PromotionRepository;
use App\Repositories\PromotionRepositoryInterface;
use Illuminate\Support\ServiceProvider;

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
