<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Posts::factory(100)->create();
        // $this->call(UsersTableSeeder::class);
        // $this->call(weightfeeseed::class);
        // \App\Models\statistic::factory(29)->create();
        \App\Models\statistic_cs::factory(29)->create();
    }
}
