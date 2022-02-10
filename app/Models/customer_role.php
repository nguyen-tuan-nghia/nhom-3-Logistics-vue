<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customer_role extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
         'customer_id', 'name', 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'customer_roles';
}
