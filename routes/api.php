<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\feeshipController;
use App\Http\Controllers\townFeeshipController;
use App\Http\Controllers\weightController;
use App\Http\Controllers\companyController;
use App\Http\Controllers\orderController;
use App\Http\Controllers\authController;
use App\Http\Controllers\shipperController;
use App\Http\Controllers\statisticController;
use App\Http\Controllers\CsPermissionController;
use App\Http\Controllers\CustomerController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::post('/sociallogin/{provider}', [SocialController::class,'social']);
Route::post('/login/admin', [loginController::class,'login_admin']);
Route::post('/login/auth', [loginController::class,'login_auth']);
Route::get('/logout', [loginController::class,'logout']);
Route::post('/register', [loginController::class,'register']);
Route::post('/login/customer', [loginController::class,'login_customer']);
Route::post('/login/auth/customer', [loginController::class,'login_auth_customer']);
//customer-log setting
Route::get('/cs/setting', [loginController::class,'csSetting']);
Route::post('/cs/pass/edit', [loginController::class,'csPassEdit']);
//admin-log setting
Route::get('/ad/setting', [loginController::class,'adSetting']);
Route::post('/ad/pass/edit', [loginController::class,'adPassEdit']);

//admin posts
Route::post('/add/posts',[PostsController::class,'store']);
Route::get('/posts/index',[PostsController::class,'index']);
Route::get('/posts/edit/{id}',[PostsController::class,'edit']);
Route::post('/update/posts/{id}',[PostsController::class,'update']);
Route::get('/posts/delete/{id}',[PostsController::class,'delete']);
Route::post('/posts/delete-checked',[PostsController::class,'delete_checked']);
//admin user
Route::post('/User/add',[UserController::class,'store']);
Route::get('/User/index',[UserController::class,'index']);
Route::post('/User/update/{id}',[UserController::class,'update']);
Route::get('/User/delete/{id}',[UserController::class,'delete']);
Route::post('/User/delete-checked',[UserController::class,'delete_checked']);
Route::post('/Customer/add',[CustomerController::class,'store']);
Route::get('/Customer/index',[CustomerController::class,'index']);
Route::post('/Customer/update/{id}',[CustomerController::class,'update']);
Route::get('/Customer/delete/{id}',[CustomerController::class,'delete']);
Route::post('/Customer/delete-checked',[CustomerController::class,'delete_checked']);
//admin permission
Route::get('/Permission/index',[PermissionController::class,'index']);
Route::get('/Permission/edit/{id}',[PermissionController::class,'edit']);
Route::get('/Permission/delete/{id}',[PermissionController::class,'delete']);
Route::post('/Permission/delete-checked',[PermissionController::class,'delete_checked']);
Route::post('/add/permission',[PermissionController::class,'store']);
Route::post('/update/Permission/{id}',[PermissionController::class,'update']);
//public permission
Route::get('/csPermission/index',[CsPermissionController::class,'index']);
Route::get('/csPermission/edit/{id}',[CsPermissionController::class,'edit']);
Route::get('/csPermission/delete/{id}',[CsPermissionController::class,'delete']);
Route::post('/csPermission/delete-checked',[CsPermissionController::class,'delete_checked']);
Route::post('/add/csPermission',[CsPermissionController::class,'store']);
Route::post('/update/csPermission/{id}',[CsPermissionController::class,'update']);
//public shipping
Route::get('/all-city',[feeshipController::class,'getAllCity']);
Route::get('/all-wards',[feeshipController::class,'getallwards']);
Route::get('/all-district',[feeshipController::class,'getallDistrict']);

Route::get('/find-city',[feeshipController::class,'findCity']);
Route::get('/find-wards',[feeshipController::class,'findwards']);
Route::get('/find-district',[feeshipController::class,'findDistrict']);

//admin feeship
Route::post('/feeship/add',[feeshipController::class,'store']);
Route::post('/feeship-town/add',[feeshipController::class,'storeInTown']);

Route::get('/feeship/index',[feeshipController::class,'index']);
Route::post('/update/feeship/{id}',[feeshipController::class,'update']);
Route::get('/feeship/delete/{id}',[feeshipController::class,'delete']);
Route::post('/feeship/delete-checked',[feeshipController::class,'delete_checked']);
Route::post('/editPriceShip',[feeshipController::class,'editPriceShip']);

//admin townfeeship
Route::get('/townFeeship/index',[townFeeshipController::class,'index']);
Route::post('/update/townFeeship/{id}',[townFeeshipController::class,'update']);
Route::get('/townFeeship/delete/{id}',[townFeeshipController::class,'delete']);
Route::post('/townFeeship/delete-checked',[townFeeshipController::class,'delete_checked']);
Route::post('/editPriceShipTown',[townFeeshipController::class,'editPriceShipTown']);
//admin weight
Route::post('/weightfee/add',[weightController::class,'store']);
Route::get('/weightfee/index',[weightController::class,'index']);
//public order
Route::post('/getWeightfee',[weightController::class,'getWeightfee']);
Route::post('/getfeeshipInOrder',[feeshipController::class,'getfeeshipInOrder']);
Route::post('/order/add',[orderController::class,'store']);
Route::get('/order/index',[orderController::class,'index']);
Route::get('/order/edit/{id}',[orderController::class,'edit']);
Route::post('/order/update/{id}',[orderController::class,'update']);
Route::get('/order/delete/{id}',[orderController::class,'delete']);
Route::post('/order/delete-checked',[orderController::class,'delete_checked']);
Route::get('/order/findDate',[orderController::class,'findDate']);
Route::get('/customer/shipper/detail/{id}',[orderController::class,'shipper']);
Route::get('/customer/order/detail/{id}',[orderController::class,'detail']);
Route::get('/customer/order/export/{id}',[orderController::class,'export_csv']);
//admin ship-order
Route::get('/shipper/allorder/index',[orderController::class,'index_ship_order']);
Route::get('/shipper/allorder/findDate',[orderController::class,'ship_order_findDate']);
Route::post('/order/Receive',[orderController::class,'receive']);

//admin your ship-order
Route::get('/shipper/your-order/index',[shipperController::class,'index_ship_order']);
Route::get('/shipper/your-order/findDate',[shipperController::class,'ship_order_findDate']);
Route::get('/shipper/order/detail/{id}',[shipperController::class,'detail']);
Route::post('/order/Receive',[shipperController::class,'receive']);
Route::post('/order/changeStatus',[shipperController::class,'changeStatus']);

//public company
Route::post('/company/add',[companyController::class,'store']);
Route::get('/getcompanyOrder',[companyController::class,'getcompanyOrder']);
Route::get('/company/index',[companyController::class,'index']);
Route::post('/changeStatusCompany',[companyController::class,'changeStatusCompany']);
Route::get('/deleteCompany/{id}',[companyController::class,'delete']);
Route::post('/company/delete-checked',[companyController::class,'delete_checked']);
Route::get('/company/edit/{id}',[companyController::class,'edit']);
Route::post('/company/update',[companyController::class,'update']);
//admin auth template
Route::get('/admin/auth',[authController::class,'auth']);
//public auth template
Route::get('/customer/auth',[authController::class,'csauth']);
//
//public statistic
Route::get('/customer/statistic',[statisticController::class,'customer']);
Route::post('/customer/statistic/findSelect',[statisticController::class,'customer_findSelect']);
Route::post('/customer/statistic/findDate',[statisticController::class,'customer_findDate']);
Route::get('/customer/statistic/fillall',[statisticController::class,'csfillall']);
//admin statistic
Route::get('/admin/statistic',[statisticController::class,'ad']);
Route::post('/admin/statistic/findSelect',[statisticController::class,'ad_findSelect']);
Route::post('/admin/statistic/findDate',[statisticController::class,'ad_findDate']);
Route::get('/admin/statistic/fillall',[statisticController::class,'adfillall']);
