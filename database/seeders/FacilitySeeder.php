<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FacilitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $facilities = [
            ['name' => 'Baggage +10kg', 'price' => 100000, 'airline_id' => 1],
            ['name' => 'Baggage +15kg', 'price' => 200000, 'airline_id' => 1],
            ['name' => 'Baggage +20kg', 'price' => 250000, 'airline_id' => 1],

            ['name' => 'Baggage +10kg', 'price' => 100000, 'airline_id' => 2],
            ['name' => 'Baggage +20kg', 'price' => 200000, 'airline_id' => 2],
            ['name' => 'Baggage +30kg', 'price' => 300000, 'airline_id' => 2],

            ['name' => 'Baggage +20kg', 'price' => 200000, 'airline_id' => 3],
            ['name' => 'Baggage +30kg', 'price' => 300000, 'airline_id' => 3],
            ['name' => 'Baggage +40kg', 'price' => 350000, 'airline_id' => 3],
            ['name' => 'Baggage +50kg', 'price' => 400000, 'airline_id' => 3],

            ['name' => 'Baggage +20kg', 'price' => 200000, 'airline_id' => 4],
            ['name' => 'Baggage +25kg', 'price' => 250000, 'airline_id' => 4],
            ['name' => 'Baggage +30kg', 'price' => 300000, 'airline_id' => 4],
            ['name' => 'Baggage +35kg', 'price' => 350000, 'airline_id' => 4],
            ['name' => 'Baggage +40kg', 'price' => 400000, 'airline_id' => 4],
            ['name' => 'Baggage +45kg', 'price' => 450000, 'airline_id' => 4],
            ['name' => 'Baggage +50kg', 'price' => 500000, 'airline_id' => 4],
        ];

        DB::table('facilities')->insert($facilities);
    }
}
