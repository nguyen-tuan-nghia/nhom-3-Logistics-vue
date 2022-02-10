<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\weightfee;

class weightfeeseed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        weightfee::create([
            'min' => 0,
            'max' => 200,
            'price' => 35000
        ]);
        weightfee::create([
            'min' => 200,
            'max' => 400,
            'price' => 45000
        ]);
        weightfee::create([
            'min' => 400,
            'max' => 700,
            'price' => 50000
        ]);
        weightfee::create([
            'min' => 700,
            'max' => 1000,
            'price' => 60000
        ]);
        weightfee::create([
            'min'=>1000,
            'max'=>2000,
            'price'=>80000
        ]);
        weightfee::create([
            'min'=>2000,
            'max'=>4000,
            'price'=>140000
        ]);
        weightfee::create([
            'min'=>4000,
            'max'=>1000000,
            'price'=>2400000
        ]);
    }
}
