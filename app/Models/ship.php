<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ship extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id','form_name','form_phone','to_name','to_phone', 'from_city_name', 'from_district_name', 'from_wards_name', 'from_address', 'to_city_id', 'to_district_id',
        'to_wards_id', 'to_city_name', 'to_district_name', 'to_wards_name', 'to_address', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'ships';
}
