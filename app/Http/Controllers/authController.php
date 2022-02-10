<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role_user;
use App\Models\permission;
use App\Models\customer;
use App\Models\customer_permission;
use App\Models\role_permission_customer;
use App\Models\customer_role;
class authController extends Controller
{
    public function auth(Request $request){
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                $role_user = role_user::where('user_id', $user->id)->first();
                if($role_user){
                    $permission=permission::where('role_id',$role_user->role_id)->select('name')->get();
                    return response()->json($permission,200);
                }
            }
        }
    }
    public function csauth(Request $request){
        $cooki = $request->cookie('name');
        if ($cooki) {
            $customer = customer::where('remember_token', $cooki)->first();
            if ($customer) {
                $role_permission_customer = role_permission_customer::where('customer_id', $customer->id)->first();
                if($role_permission_customer){
                    $permission=customer_permission::where('customer_role_id',$role_permission_customer->role_customer_id)->select('name')->get();
                    return response()->json($permission,200);
                }
            }
        }
    }
}
