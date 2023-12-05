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
        Schema::create('seats', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('first');
            $table->integer('first_original');
            $table->integer('business');
            $table->integer('business_original');
            $table->integer('premium_economy');
            $table->integer('premium_economy_original');
            $table->integer('economy');
            $table->integer('economy_original');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seats');
    }
};
