<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\feeship;
use Illuminate\Support\Str;

class FeeshipSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    for($i=1;$i<5;$i++){
        for($j=1;$j<5;$j++){
        $feeship=new feeship;
        $feeship->form_city_id=$i;
        $feeship->to_city_id=$j;
        $feeship->price=rand(80000,300000);
        if($i!=$j){
        $feeship->save();
        }}
    }
}
}
