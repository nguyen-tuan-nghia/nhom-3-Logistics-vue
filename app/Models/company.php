<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class company extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_id','name', 'phone', 'city_id', 'district_id','wards_id','city_name','district_name','wards_name',
        'address', 'status', 'created_at','updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'companies';
}
