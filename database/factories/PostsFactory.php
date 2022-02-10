<?php

namespace Database\Factories;
use App\Models\Posts;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PostsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    protected $model = Posts::class;

    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'slug'=>$this->faker->name(),
            'image' => Str::random(10),
            'keywords' => Str::random(10),
            'content' => 'ok ko', // password
            'status'=>1
        ];
    }
}
