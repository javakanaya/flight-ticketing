<?php

namespace Database\Factories;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $classRange = [1, 2, 3, 4];
        return [
            'class' => $this->faker->randomElement($classRange),
            'price' => $this->faker->numberBetween(400000, 3000000),
        ];
    }
}
