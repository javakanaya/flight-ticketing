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
        for ($i = 1; $i <= 1000; $i++) {
            Ticket::factory()->create(['route_id' => $i, 'class' => 4]);
        }
        for ($i = 1; $i <= 1000; $i++) {
            Ticket::factory()->create(['route_id' => $i, 'class' => 3]);
        }
        for ($i = 1; $i <= 1000; $i++) {
            Ticket::factory()->create(['route_id' => $i, 'class' => 2]);
        }
        for ($i = 1; $i <= 1000; $i++) {
            Ticket::factory()->create(['route_id' => $i, 'class' => 1]);
        }
    }
}
