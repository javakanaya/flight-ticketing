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

        $departureDatetime = $this->faker->dateTimeInInterval('now', '+3 days');
        $arrivalDatetime = $this->faker->dateTimeInInterval($departureDatetime, '+5 hours');
        $sourceAirportId = $this->faker->numberBetween(1, 6);

        do {
            $destinationAirportId = $this->faker->numberBetween(1, 6);
        } while ($destinationAirportId === $sourceAirportId);


        return [
            'departure' => $departureDatetime,
            'arrival' => $arrivalDatetime,
            'airline_id' => $this->faker->numberBetween(1, 4),
            'source_airport_id' => $sourceAirportId,
            'destination_airport_id' => $destinationAirportId,
            'seat_id' => $this->faker->unique()->numberBetween(1, 500),
        ];
    }
}