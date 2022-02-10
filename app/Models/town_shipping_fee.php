<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class town_shipping_fee extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'city_id','city_name', 'price_in_town', 'price_out_town', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'town_shipping_fees';
}
