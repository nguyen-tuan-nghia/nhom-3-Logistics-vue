<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class permission extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'name',  'role_id', 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'permission';
}
