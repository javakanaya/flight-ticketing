<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Seat>
 */
class SeatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first' => fake()->numberBetween(0, 4),
            'business' => fake()->numberBetween(0, 6),
            'premium_economy' => fake()->numberBetween(0, 12),
            'economy' => fake()->numberBetween(80, 300),
        ];
    }
}