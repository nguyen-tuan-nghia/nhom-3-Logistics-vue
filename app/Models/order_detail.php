<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_detail extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'order_id','name', 'weight', 'quantity', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'order_details';
}
