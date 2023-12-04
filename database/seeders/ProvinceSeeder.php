<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = file_get_contents(database_path('seeders/json/province.json'));
        $provinces = json_decode($json, true);

        $payload = [];
        foreach ($provinces as $province) {
            $payload[] = [
                'id' => $province['id'],
                'name' => $province['name'],
                'country_id' => 101,
            ];
        }
        DB::table('provinces')->insert($payload);
    }
}
