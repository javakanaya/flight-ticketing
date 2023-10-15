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
        //
        $indonesia_cities = [
            ["id" => 3372, "name" => "KOTA SURAKARTA", "province_id" => 33],
            ["id" => 3401, "name" => "KABUPATEN KULON PROGO", "province_id" => 34],
            ["id" => 3578, "name" => "KOTA SURABAYA", "province_id" => 35],
            ["id" => 3671, "name" => "KOTA TANGERANG", "province_id" => 36],
            ["id" => 5171, "name" => "KOTA DENPASAR", "province_id" => 51],
            ["id" => 1275, "name" => "KOTA MEDAN", "province_id" => 12],
            ["id" => 3273, "name" => "KOTA BANDUNG", "province_id" => 32],
            ["id" => 7371, "name" => "KOTA MAKASSAR", "province_id" => 73],
            ["id" => 1471, "name" => "KOTA PEKANBARU", "province_id" => 1471],
        ];

        DB::table('cities')->insert($indonesia_cities);
    }
}
