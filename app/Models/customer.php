<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customer extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name', 'email','boss_id', 'phone', 'password', 'city_id', 'city_name', 'remember_token'
    ];
    protected $primaryKey = 'id';
    protected $table = 'customers';
}
