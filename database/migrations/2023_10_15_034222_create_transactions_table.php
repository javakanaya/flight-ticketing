<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('count');
            $table->foreignId('ticket_id');
            $table->foreignId('user_id');
            $table->tinyInteger('status');// 0 unpaid, 1 Paid, 3 canceled
            $table->integer('total_price');
            $table->boolean('is_travel_assurance');
            $table->boolean('is_delay_assurance');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
