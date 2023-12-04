<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     
    public function run(): void
    {
        $json = file_get_contents(database_path('seeders/json/city.json'));
        $cities = json_decode($json, true);

        $payload = [];
        foreach ($cities as $city) {
            
            $payload[] = [
                'id' => $city['id'],
                'province_id' => $city['province_id'],
                'name' => $city['name']
            ];
        }
        DB::table('cities')->insert($payload);
    }
}
