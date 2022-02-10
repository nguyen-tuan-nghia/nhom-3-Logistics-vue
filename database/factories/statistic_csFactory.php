<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\statistic_cs;

class statistic_csFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = statistic_cs::class;

    public function definition()
    {
        return [
            'customer_id' => 9,
            'order'=>rand(5, 15),
            'cod' => rand(40, 50)*1000,
            'feeship' => rand(35, 100)*1000,
            'created_at' => $this->faker->dateTimeThisMonth()->format('Y-m-d'),
        ];
    }
}
