<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendPaymentSuccessEmail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use App\Mail\SendPaymentCancelationEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class SendEmailNotifications implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public $transactionId;
    public $type; // 0 succeeded, 1 failed
    public $appUrl;
    public $userName;
    public $userEmail;
    public function __construct($transactionId, $type, $appUrl, $userName, $userEmail)
    {
        $this->transactionId = $transactionId;
        $this->type = $type;
        $this->appUrl = $appUrl;
        $this->userName = $userName;
        $this->userEmail = $userEmail;
    }
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $data = [
            'user_name' => $this->userName,
            'transaction_id' => $this->transactionId,
            'app_url' => $this->appUrl,
        ];

        if ($this->type === 0) {
            Mail::to($this->userEmail)->send(new SendPaymentSuccessEmail($data));
        } else if ($this->type === 1) {
            Mail::to($this->userEmail)->send(new SendPaymentCancelationEmail($data));
        }
    }
}
