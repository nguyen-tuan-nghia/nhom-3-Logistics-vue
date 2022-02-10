<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class statistic extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'order','cod','feeship', 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'statistics';
}
