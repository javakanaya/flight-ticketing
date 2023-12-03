<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Transaction;
use Faker\Factory as Faker;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Let's seed 50 transactions for demonstration purposes
        for ($i = 0; $i < 1; $i++) {
            Transaction::create([
                'count' => $faker->numberBetween(1, 10),
                'ticket_id' => $faker->numberBetween(1, 10),
                'user_id' => $faker->numberBetween(1, 10),
                'status' => $faker->randomElement([0, 1, 2]), // Assuming 0: pending, 1: success, 2: failure
                'total_price' => $faker->randomFloat(2, 10, 1000),
                'is_travel_assurance' => $faker->boolean,
                'is_delay_assurance' => $faker->boolean,
            ]);
        }
    }
}
