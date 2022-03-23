<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'customer_id ', 'feeship', 'total_weight', 'height', 'width', 'total_fee', 'status', 'cod', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'orders';
    public function ship(){
        return $this->hasOne(ship::class);
        }
    public function customer(){
        return $this->belongsTo(customer::class);
        }
    public function product(){
        return $this->hasMany(order_detail::class);
        }
}
