<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirlineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $airlines = [
            ['name' => 'Wings Air', 'IATA' => 'IW'],
            ['name' => 'Garuda Indonesia', 'IATA' => 'GA'],
            ['name' => 'Citilink', 'IATA' => 'QG'],
            ['name' => 'Batik Air', 'IATA' => 'ID'],
        ];

        DB::table('airlines')->insert($airlines);

    }
}