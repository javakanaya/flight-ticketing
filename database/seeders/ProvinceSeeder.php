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
        $indonesia_provinces = [
            ["id" => 11, "name" => "ACEH", "country_id" => 101],
            ["id" => 12, "name" => "SUMATERA UTARA", "country_id" => 101],
            ["id" => 13, "name" => "SUMATERA BARAT", "country_id" => 101],
            ["id" => 14, "name" => "RIAU", "country_id" => 101],
            ["id" => 15, "name" => "JAMBI", "country_id" => 101],
            ["id" => 16, "name" => "SUMATERA SELATAN", "country_id" => 101],
            ["id" => 17, "name" => "BENGKULU", "country_id" => 101],
            ["id" => 18, "name" => "LAMPUNG", "country_id" => 101],
            ["id" => 19, "name" => "KEPULAUAN BANGKA BELITUNG", "country_id" => 101],
            ["id" => 21, "name" => "KEPULAUAN RIAU", "country_id" => 101],
            ["id" => 31, "name" => "DKI JAKARTA", "country_id" => 101],
            ["id" => 32, "name" => "JAWA BARAT", "country_id" => 101],
            ["id" => 33, "name" => "JAWA TENGAH", "country_id" => 101],
            ["id" => 34, "name" => "DI YOGYAKARTA", "country_id" => 101],
            ["id" => 35, "name" => "JAWA TIMUR", "country_id" => 101],
            ["id" => 36, "name" => "BANTEN", "country_id" => 101],
            ["id" => 51, "name" => "BALI", "country_id" => 101],
            ["id" => 52, "name" => "NUSA TENGGARA BARAT", "country_id" => 101],
            ["id" => 53, "name" => "NUSA TENGGARA TIMUR", "country_id" => 101],
            ["id" => 61, "name" => "KALIMANTAN BARAT", "country_id" => 101],
            ["id" => 62, "name" => "KALIMANTAN TENGAH", "country_id" => 101],
            ["id" => 63, "name" => "KALIMANTAN SELATAN", "country_id" => 101],
            ["id" => 64, "name" => "KALIMANTAN TIMUR", "country_id" => 101],
            ["id" => 65, "name" => "KALIMANTAN UTARA", "country_id" => 101],
            ["id" => 71, "name" => "SULAWESI UTARA", "country_id" => 101],
            ["id" => 72, "name" => "SULAWESI TENGAH", "country_id" => 101],
            ["id" => 73, "name" => "SULAWESI SELATAN", "country_id" => 101],
            ["id" => 74, "name" => "SULAWESI TENGGARA", "country_id" => 101],
            ["id" => 75, "name" => "GORONTALO", "country_id" => 101],
            ["id" => 76, "name" => "SULAWESI BARAT", "country_id" => 101],
            ["id" => 81, "name" => "MALUKU", "country_id" => 101],
            ["id" => 82, "name" => "MALUKU UTARA", "country_id" => 101],
            ["id" => 91, "name" => "PAPUA BARAT", "country_id" => 101],
            ["id" => 94, "name" => "PAPUA", "country_id" => 101]
        ];
    DB::table('provinces')->insert($indonesia_provinces);
    }
}
