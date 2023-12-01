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
        return [
            'route_id' => $this->faker->numberBetween(1, 500),
            'class' => $this->faker->numberBetween(1, 4),
            'price' => $this->faker->numberBetween(400000, 3000000),
        ];
    }

    /**
     * Create tickets for all classes for a specific route.
     *
     * @param  int  $routeId
     * @return \Database\Factories\TicketFactory
     */
    public function forAllClasses(int $routeId): TicketFactory
    {
        return $this->state(function (array $attributes) use ($routeId) {
            return [
                'route_id' => $routeId,
            ];
        });
    }
}
