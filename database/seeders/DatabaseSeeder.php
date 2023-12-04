<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\CitySeeder;
use Database\Seeders\SeatSeeder;
use Database\Seeders\RouteSeeder;
use Database\Seeders\TicketSeeder;
use Database\Seeders\AirlineSeeder;
use Database\Seeders\AirportSeeder;
use Database\Seeders\CountrySeeder;
use Database\Seeders\FacilitySeeder;
use Database\Seeders\ProvinceSeeder;
use Database\Seeders\PassengerSeeder;
use Database\Seeders\TransactionSeeder;
use Database\Seeders\FacilityPassengerSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'is_admin' => true,
        ]);
        User::factory()->create([
            'name' => 'Java',
            'email' => 'javakanaya@gmail.com',
            'is_admin' => false,
        ]);

        User::factory(10)->create();

        $this->call([
            CountrySeeder::class,
            ProvinceSeeder::class,
            CitySeeder::class,
            AirportSeeder::class,
            AirlineSeeder::class,
            SeatSeeder::class,
            RouteSeeder::class,
            TicketSeeder::class,
            FacilitySeeder::class,
            PassengerSeeder::class,
            FacilityPassengerSeeder::class,
            TransactionSeeder::class,
        ]);
    }
}
