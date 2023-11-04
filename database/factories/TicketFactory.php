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
        // Generate a unique set of classes (1, 2, 3, and 4) for each route_id
        static $uniqueClasses = [1, 2, 3, 4];

        $routeId = $this->faker->numberBetween(1, 100);
        $class = array_shift($uniqueClasses);

        if (empty($uniqueClasses)) {
            // Reset classes when all have been used
            $uniqueClasses = [1, 2, 3, 4];
        }

        return [
            'route_id' => $routeId,
            'class' => $class,
            'price' => $this->faker->numberBetween(400000, 3000000),
        ];
    }


}
