<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\PermissionController;
Route::get('/{any}', function () {
    return view('admin');
  })->where('any', '.*');





