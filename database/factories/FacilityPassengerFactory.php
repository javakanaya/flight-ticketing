<?php

namespace Database\Factories;

use App\Models\FacilityPassenger;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FacilityPassenger>
 */
class FacilityPassengerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'facility_id' => $this->faker->numberBetween(1, 17),
        ];
    }
}
