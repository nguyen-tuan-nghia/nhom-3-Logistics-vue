<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class statistic_cs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'customer_id',  'order','cod','feeship', 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'statistic_cs';
}
