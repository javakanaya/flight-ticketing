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
            $table->tinyInteger('status');
            $table->double('total_price', 12, 2);
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
