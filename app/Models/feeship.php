<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class feeship extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'form_city_id','form_city_name', 'to_city_id','to_city_name', 'price', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'feeships';
}
