<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\customer_role;
use App\Models\customer;
use App\Models\role_permission_customer;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        if (isset($request->permission)) {
            $role = customer_role::where('customer_id',$user_id)->where('name', $request->permission)->first();
            $role_permission_customer = role_permission_customer::where('role_customer_id', $role->id)->select('customer_id')->get();
            if (isset($request->search)) {
                    $customer = customer::whereIn('id', $role_permission_customer)->where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->paginate(10);
                    $customer_id = customer::whereIn('id', $role_permission_customer)->where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();

            } else {
                    $customer = customer::whereIn('id', $role_permission_customer)->orderBy('id', 'DESC')->paginate(10);
                    $customer_id = customer::whereIn('id', $role_permission_customer)->orderBy('id', 'DESC')->get();
            }
        } else {
            if (isset($request->search)) {
                $customer = customer::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->paginate(10);
                $customer_id = customer::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();
            } else {
                $customer = customer::orderBy('id', 'DESC')->paginate(10);
                $customer_id = customer::orderBy('id', 'DESC')->get();
            }
        }
    }
        }
        return response()->json(['data_all' => $customer, 'data' => $customer_id], 200);
    }
    public function delete(Request $request, $id)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        $customer=customer::where('boss_id',$user_id)->where('id',$id)->delete();
        return response()->json('ok', 200);}}
    }
    public function delete_checked(Request $request)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        foreach ($request->selected as $key) {
            $customer = customer::where('boss_id',$user_id)->where('id', $key)->first();
            if ($customer) {
                $customer->delete();
            }
        }
        return response()->json(['data' => $customer], 200);
    }}}
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:customers',
            'phone' => 'required'
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        $role = customer_role::where('name', $request->permission)->first();
        if ($role) {
            $customer = new customer;
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->boss_id=$user_id;
            $customer->city_id=0;
            $customer->city_name=0;
            $customer->password = md5($request->phone);
            $customer->phone = $request->phone;
            $customer->save();
            $role_permission_customer = role_permission_customer::create([
                'role_customer_id' => $role->id,
                'customer_id' => $customer->id
            ]);
            return response()->json(['data' => $customer], 200);
        }}}
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required'
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        $customer = customer::where('boss_id',$user_id)->where('id',$id)->first();
        $customer->name = $request->name;
        $customer->password = md5($request->phone);
        $customer->phone = $request->phone;
        $customer->save();
        return response()->json($customer, 200);
    }}}
}
