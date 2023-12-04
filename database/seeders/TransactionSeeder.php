<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 20; $i++) {
            Transaction::factory()->create(['count' => 1]);
        }
        for ($i = 21; $i <= 40; $i++) {
            Transaction::factory()->create(['count' => 2]);
        }
        for ($i = 41; $i <= 60; $i++) {
            Transaction::factory()->create(['count' => 3]);
        }
        for ($i = 61; $i <= 80; $i++) {
            Transaction::factory()->create(['count' => 4]);
        }
        for ($i = 81; $i <= 100; $i++) {
            Transaction::factory()->create(['count' => 5]);
        }
    }
}
