<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Database\Factories\TicketFactory;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Assuming you have 500 routes
        for ($i = 1; $i <= 500; $i++) {
            Ticket::factory()->forAllClasses($i)->count(4)->create();
        }
    }
}
