<?php

namespace App\Jobs;

use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ProcessTransactionPayment implements ShouldQueue
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
        $this->userName =$userName;
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

        // Update the status from 1 (processing) to 2 (paid)
        $transaction->update(['status' => 2]);

        // Send email notifications the transaction ID
        SendEmailNotifications::dispatch($transaction->id, 0,  $this->appUrl, $this->userName, $this->userEmail);
    }
}
