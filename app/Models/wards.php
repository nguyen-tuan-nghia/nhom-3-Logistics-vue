<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class wards extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
          'name',  'type' ,'maqh'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'tbl_xaphuongthitran';
}
