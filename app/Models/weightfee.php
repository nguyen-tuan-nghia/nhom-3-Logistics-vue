<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class weightfee extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'min','max', 'price', 'created_at', 'updated_at'
    ];
    protected $primaryKey = 'id';
    protected $table = 'weightfees';
}
