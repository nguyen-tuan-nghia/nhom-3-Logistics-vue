<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class role_user extends Model
{
    use HasFactory;
    protected $fillable = [
        'role_id',  'user_id', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'role_users';
}
