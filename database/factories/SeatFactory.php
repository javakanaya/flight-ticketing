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
            'first_original' => fn (array $attributes) => $attributes['first'],
            
            'business' => fake()->numberBetween(0, 6),
            'business_original' => fn (array $attributes) => $attributes['business'],
            
            'premium_economy' => fake()->numberBetween(0, 12),
            'premium_economy_original' => fn (array $attributes) => $attributes['premium_economy'],
            
            'economy' => fake()->numberBetween(80, 300),
            'economy_original' => fn (array $attributes) => $attributes['economy'],
        ];
    }
}