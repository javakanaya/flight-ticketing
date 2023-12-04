<?php

namespace Database\Seeders;

use App\Models\FacilityPassenger;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacilityPassengerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 300; $i++) {
            FacilityPassenger::factory()->create(['passenger_id' => $i]);
        }
    }
}
