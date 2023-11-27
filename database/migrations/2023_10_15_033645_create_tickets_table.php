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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('route_id');
            $table->tinyInteger('class'); // 1: first, 2: business, 3: premEcon, 4: economy
            $table->double('price', 11, 2);
            $table->integer('bagage')->default(20);
            $table->integer('cabin_bagage')->default(7);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
