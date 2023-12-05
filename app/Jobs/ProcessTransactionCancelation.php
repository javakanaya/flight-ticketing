<?php

namespace App\Jobs;

use App\Models\Seat;
use App\Models\Ticket;
use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use App\Jobs\SendEmailNotifications;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ProcessTransactionCancelation implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    private $transactionId;
    private $userName;
    private $appUrl;
    private $userEmail;

    public function __construct($transactionId, $userName, $appUrl, $userEmail)
    {
        $this->transactionId = $transactionId;
        $this->userName = $userName;
        $this->appUrl = $appUrl;
        $this->userEmail = $userEmail;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        sleep(5);
        $transaction = Transaction::find($this->transactionId);


        $selectedTicket = Ticket::findOrFail($transaction->ticket_id);
        $ticketClass = $selectedTicket->class;

        // Update seats count for the selected class
        $seats = Seat::find($selectedTicket->route->seat_id);
        switch ($ticketClass) {
            case 1:
                $seats->first += $transaction->count;
                break;
            case 2:
                $seats->business += $transaction->count;
                break;
            case 3:
                $seats->premium_economy += $transaction->count;
                break;
            case 4:
                $seats->economy += $transaction->count;
                break;
            // Add more cases if you have more classes
        }
        $seats->save();

        // Update the status from 1 (processing) to 3 (canceled)
        $transaction->update(['status' => 3]);
        // Send email notifications the transaction ID
        SendEmailNotifications::dispatch($transaction->id, 1, $this->appUrl, $this->userName, $this->userEmail);
    }
}
