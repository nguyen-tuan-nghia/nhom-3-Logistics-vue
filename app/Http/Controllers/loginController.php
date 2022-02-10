<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;;
use Illuminate\Support\Str;
use App\Models\customer;
use App\Models\customer_permission;
use App\Models\role_permission_customer;
use App\Models\customer_role;
class loginController extends Controller
{
    public function login_auth(Request $Request)
    {
        $cooki = $Request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                return response()->json(['message' => 'success'], 200);
            }
        }
            return response()->json(['message' => 'err'], 406);
    }
    public function login_admin(Request $Request)
    {
        $Request->validate([
            'email' => 'required|email',
            'pass' => 'required'
        ]);
        $token = Str::random(10);
        $user = User::where('email', $Request->email)->where('password', md5($Request->pass))->first();
        if ($user) {
            $user->remember_token = $token;
            $user->save();
            return response()->json(['message' => 'succes'], 200)->withCookie(cookie('name', $token, 60 * 24 * 60));
        } else {
            return response()->json(['status' => 423, 'message' => 'Your account don`t exsits'], 423);
        }
    }
    public function login_customer(Request $Request)
    {
        $Request->validate([
            'email' => 'required|email',
            'pass' => 'required'
        ]);
        $token = Str::random(10);
        $user = customer::where('email', $Request->email)->where('password', md5($Request->pass))->first();
        if ($user) {
            $user->remember_token = $token;
            $user->save();
            return response()->json($user->name, 200)->withCookie(cookie('name', $token, 60 * 24 * 60));
        } else {
            return response()->json(['status' => 423, 'message' => 'Your account don`t exsits'], 423);
        }
    }
    public function logout()
    {
        return response()->json(['message' => 'succes'], 200)->withCookie(cookie('name', null, 0));
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'pass' => 'required_with:pass2|same:pass2',
            'pass2' => 'required',
            'address' => 'required',
            'phone' => 'required'
        ]);
        $customer = new customer;
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->password = md5($request->pass);
        $customer->city_id = $request->address;
        $customer->city_name = $request->address_name;
        $customer->phone = $request->phone;
        $customer->save();
        $customer_role= customer_role::create([
            'customer_id'=>$customer->id,
            'name'=>'Admin',
        ]);
        $data=[[
            'name'=>'View_dashboard',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'View_order',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Create_order',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Edit_order',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Delete_order',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'View_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Create_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Edit_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Delete_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'View_user_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Create_user_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Edit_user_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Delete_user_permission',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'View_message',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Create_message',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Edit_message',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Delete_message',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'View_company',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Create_company',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Edit_company',
            'customer_role_id'=>$customer_role->id
        ],[
            'name'=>'Delete_company',
            'customer_role_id'=>$customer_role->id
        ]];
        $cus=customer_permission::insert($data);
        $role_permission_customer = role_permission_customer::create([
            'role_customer_id' => $customer_role->id,
            'customer_id' => $customer->id
        ]);
        return response()->json(['message' => $cus], 200);
    }
    public function login_auth_customer(Request $Request)
    {
        $cooki = $Request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                return response()->json(['message' => 'success'], 200);
            }
        }
        return response()->json(['message' => 'err'], 406);
    }
    public function csSetting(Request $Request)
    {
        $cooki = $Request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
                return response()->json($user, 200);
        }
        return response()->json(['message' => 'err'], 406);
    }
    public function csPassEdit(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'pass' => 'required',
            'phone' => 'required'
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
        $customer = customer::where('remember_token', $cooki)->first();
        $customer->name=$request->name;
        $customer->phone=$request->phone;
        $customer->password=md5($request->pass);
        $customer->save();
    }
    }
    public function adSetting(Request $Request)
    {
        $cooki = $Request->cookie('name');
        if ($cooki) {
            $user = user::where('remember_token', $cooki)->first();
                return response()->json($user, 200);
        }
        return response()->json(['message' => 'err'], 406);
    }
    public function adPassEdit(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'pass' => 'required',
            'phone' => 'required'
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
        $user = user::where('remember_token', $cooki)->first();
        $user->name=$request->name;
        $user->phone=$request->phone;
        $user->password=md5($request->pass);
        $user->save();
    }
    }
}
