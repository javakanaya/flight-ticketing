<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Route>
 */
class RouteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'departure' => fake()->dateTime(),
            'arrival' => fake()->dateTime(),
            'airline_id' => fake()->numberBetween(1, 4),
            'source_airport_id' => fake()->numberBetween(1, 5),
            'destination_airport_id' => fake()->numberBetween(1, 5),
            'seat_id' => fake()->randomDigit()
        ];
    }
}