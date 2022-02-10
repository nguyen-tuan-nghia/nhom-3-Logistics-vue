<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class district extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
          'name', 'type' ,'matp'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'tbl_quanhuyen';
}
