<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shipper_order extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'user_id',  'order_id', 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'shipper_orders';
}
