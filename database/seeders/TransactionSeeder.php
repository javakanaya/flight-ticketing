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
        for ($i = 0; $i < 50; $i++) {
            Transaction::create([
                'count' => $faker->numberBetween(1, 10),
                'ticket_id' => $faker->numberBetween(1, 10),
                'user_id' => $faker->numberBetween(1, 10),
                'external_id' => $faker->uuid,
                'status' => $faker->randomElement(['pending', 'success', 'failure']),
                'payment_url' => $faker->url,
                'created_at' => $faker->dateTimeBetween('-90 days', 'now'), // Random date within the last 90 days
            ]);
        }
    }
}
