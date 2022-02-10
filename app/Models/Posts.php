<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
          'title',  'image',  'keywords' , 'content' , 'status' , 'created_at' , 'updated_at'
    ];
    protected $primaryKey = 'id';
 	protected $table = 'posts';
}
