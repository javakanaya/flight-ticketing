<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'route_id' => fake()->numberBetween(1, 10),
            'class' => fake()->numberBetween(1, 14),
            'price' => fake()->numberBetween(500000, 5000000),
        ];
    }
}
