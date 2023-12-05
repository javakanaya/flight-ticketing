<?php

namespace App\Jobs;

use App\Models\Transaction;
use App\Models\Route; // Replace with your actual route model
use App\Models\Ticket; // Replace with your actual route model
use Database\Seeders\TicketSeeder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class DeleteUnusedRouteJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * Create a new job instance.
     *
     * @param int $routeId
     */
    public function __construct()
    {

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Ticket::where('created_at', '<', now()->subDays(90))->doesntHave('transaction')->delete();
        
        Route::where('created_at', '<', now()->subDays(90))->doesntHave('ticket')->delete();

        Log::info('Unused routes and tickets deleted.');
    }
}
