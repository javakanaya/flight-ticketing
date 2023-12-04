<?php

namespace App\Jobs;

use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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

        // Update the status from 1 (processing) to 3 (canceled)
        $transaction->update(['status' => 3]);

        // Send email notifications the transaction ID
        SendEmailNotifications::dispatch($transaction->id, 1,  $this->appUrl, $this->userName, $this->userEmail);
    }
}
