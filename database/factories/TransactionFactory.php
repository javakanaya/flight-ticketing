<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'count' => $this->faker->numberBetween(1, 5),
            'ticket_id' => $this->faker->numberBetween(1, 500), // Assuming tickets have IDs from 1 to 10
            'user_id' => $this->faker->numberBetween(2, 11), // Assuming users have IDs from 1 to 20
            'status' => $this->faker->randomElement([0, 2, 3]),
            'total_price' => $this->faker->numberBetween(1000, 5000),
            'is_travel_assurance' => $this->faker->boolean,
            'is_delay_assurance' => $this->faker->boolean,
        ];
    }
}
