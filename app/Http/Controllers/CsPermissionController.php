<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\customer;
use App\Models\customer_permission;
use App\Models\role_permission_customer;
use App\Models\customer_role;
use Carbon\Carbon;

class CsPermissionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
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
                $customer_role = new customer_role;
                $customer_role->customer_id=$user_id;
                $customer_role->name = $request->name;
                $customer_role->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                $customer_role->save();
                foreach ($request->selected as $key=>$val) {
                    $per = new customer_permission;
                    $per->name = $val;
                    $per->customer_role_id = $customer_role->id;
                    $per->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                    $per->save();
                }
                return response()->json('success', 200);
            } else {
                return response()->json('faild', 500);
            }
        } else {
            return response()->json('faild', 500);
        }
    }
    public function index(Request $request){
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
        if(isset($request->search)){
            $customer_role=customer_role::where('customer_id',$user_id)->where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->paginate(10);
            $customer_role_id=customer_role::where('customer_id',$user_id)->where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->get();
        }else{
        $customer_role=customer_role::where('customer_id',$user_id)->orderBy('id','DESC')->paginate(10);
        $customer_role_id=customer_role::where('customer_id',$user_id)->orderBy('id','DESC')->get();
    }
}
    }
        return response()->json(['data_all'=>$customer_role,'data'=>$customer_role_id],200);
    }
    public function edit(Request $request, $id)
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
        $customer_role=customer_role::where('customer_id',$user_id)->where('id',$id)->first();
        $permission=customer_permission::where('customer_role_id',$customer_role->id)->get();
        return response()->json(['role'=>$customer_role,'selected'=>$permission],200);
    }
}
    }
    public function delete($id){
        $customer_role=customer_role::find($id)->delete();
        return response()->json('ok',200);
    }
    public function delete_checked(Request $request){
        foreach($request->selected as $key){
            $customer_role=customer_role::where('id',$key)->first();
            {
                if($customer_role){
                    $customer_role->delete();
                }
            }
        }
        return response()->json(['data'=>$customer_role],200);
    }
    public function update(Request $request, $id){
        $request->validate([
            'name'=>'required',
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
                $customer_role = customer_role::where('customer_id',$user_id)->where('id',$id)->first();
                $customer_role->name = $request->name;
                $customer_role->updated_at=Carbon::now('Asia/Ho_Chi_Minh');
                $customer_role->save();
                $per=customer_permission::where('customer_role_id',$customer_role->id)->delete();
                foreach ($request->selected as $key=>$val) {
                    $per = new customer_permission;
                    $per->name = $val;
                    $per->customer_role_id = $customer_role->id;
                    $per->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                    $per->save();
                }
                return response()->json('success', 200);
            } else {
                return response()->json('faild', 500);
            }
        } else {
            return response()->json('faild', 500);
        }
    }
}
