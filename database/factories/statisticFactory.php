<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\statistic;
class statisticFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = statistic::class;

    public function definition()
    {
        return [
            'order'=>rand(100, 200),
            'cod' => rand(1000, 5000)*1000,
            'feeship' => rand(2000, 7000)*1000,
            'created_at' => $this->faker->dateTimeThisMonth()->format('Y-m-d'),
        ];
    }
}
