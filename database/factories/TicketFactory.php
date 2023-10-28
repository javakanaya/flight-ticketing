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
            'route_id' => $this->faker->numberBetween(1, 20),
            'class' => $this->faker->numberBetween(1, 4),
            'price' => $this->faker->numberBetween(400000, 3000000),
        ];
    }
}
