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
            ['name' => 'Wings Air', 'IATA' => 'IW'],
            ['name' => 'Garuda Indonesia', 'IATA' => 'GA'],
            ['name' => 'Citilink', 'IATA' => 'QG'],
            ['name' => 'Batik Air', 'IATA' => 'ID'],
        ];

        DB::table('facilities')->insert($facilities);
    }
}
