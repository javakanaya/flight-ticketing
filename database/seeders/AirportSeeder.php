<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $indonesia_airports = [
            [
                'name' => 'Bandara Internasional Kualanamu',
                'city_id' => 1275,
                'IATA' => 'KNO',
                "timezone" => 7,
            ],


            [
                'name' => 'Bandara Internasional Sultan Hasanuddin',
                'city_id' => 7371,
                'IATA' => 'UPG',
                "timezone" => 8,
            ],

            [
                'name' => 'Bandara Internasional Husein Sastranegara',
                'city_id' => 3273,
                'IATA' => 'BDO',
                "timezone" => 7,
            ],

            [
                'name' => 'Bandara Sultan Syarif Qasim II',
                'city_id' => 1471,
                'IATA' => 'PKU',
                "timezone" => 7,
            ],
            [
                'name' => 'Bandara Internasional Ngurah Rai',
                'city_id' => 5171,
                'IATA' => 'DPS',
                "timezone" => 8,
            ],

        ];

        DB::table('airports')->insert($indonesia_airports);
    }
}