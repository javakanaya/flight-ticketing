<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Jobs\DeleteOldTransactions;
use App\Jobs\DeleteUnusedRouteJob;
use Illuminate\Support\Facades\Log;
class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        Log::info('DeleteUnusedRouteJob started.');
        $schedule->job(new DeleteOldTransactions)->daily();
        $schedule->job(new DeleteUnusedRouteJob())->daily();    
        Log::info('DeleteUnusedRouteJob completed.');
    }
    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
