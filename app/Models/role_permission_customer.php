<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role_permission_customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'role_customer_id',  'customer_id', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'role_permission_customers';
}
