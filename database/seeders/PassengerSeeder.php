<?php

namespace Database\Seeders;

use App\Models\Passenger;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PassengerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            Passenger::factory()->create(['transaction_id' => $i]);
        }
        for ($i = 21; $i <= 40; $i++) {
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
        }
        for ($i = 41; $i <= 60; $i++) {
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
        }
        for ($i = 61; $i <= 80; $i++) {
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
        }
        for ($i = 81; $i <= 100; $i++) {
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
            Passenger::factory()->create(['transaction_id' => $i]);
        }
    }
}
