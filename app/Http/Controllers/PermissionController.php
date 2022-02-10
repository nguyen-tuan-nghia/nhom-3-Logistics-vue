<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\role;
use App\Models\permission;
use Illuminate\Support\Facades\Cookie;
use App\Models\User;
use Carbon\Carbon;

class PermissionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                $role = new role;
                $role->name = $request->name;
                $role->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                $role->save();
                foreach ($request->selected as $key=>$val) {
                    $per = new permission;
                    $per->name = $val;
                    $per->role_id = $role->id;
                    $per->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                    $per->save();
                }
                return response()->json('success', 200);
            } else {
                return response()->json($user, 500);
            }
        } else {
            return response()->json($cooki, 500);
        }
    }
    public function index(Request $request){
        if(isset($request->search)){
            $role=role::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->paginate(10);
            $role_id=role::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->get();
        }else{
        $role=role::orderBy('id','DESC')->paginate(10);
        $role_id=role::orderBy('id','DESC')->get();
    }
        return response()->json(['data_all'=>$role,'data'=>$role_id],200);
    }
    public function edit($id)
    {
        $role=role::where('id',$id)->first();
        $permission=permission::where('role_id',$role->id)->get();
        return response()->json(['role'=>$role,'selected'=>$permission],200);
    }
    public function delete($id){
        $role=role::find($id)->delete();
        return response()->json('ok',200);
    }
    public function delete_checked(Request $request){
        foreach($request->selected as $key){
            $role=role::where('id',$key)->first();
            {
                if($role){
                    $role->delete();
                }
            }
        }
        return response()->json(['data'=>$role],200);
    }
    public function update(Request $request, $id){
        $request->validate([
            'name'=>'required',
        ]);
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                $role = role::find($id);
                $role->name = $request->name;
                $role->updated_at=Carbon::now('Asia/Ho_Chi_Minh');
                $role->save();
                $per=permission::where('role_id',$role->id)->delete();
                foreach ($request->selected as $key=>$val) {
                    $per = new permission;
                    $per->name = $val;
                    $per->role_id = $role->id;
                    $per->created_at=Carbon::now('Asia/Ho_Chi_Minh');
                    $per->save();
                }
                return response()->json('success', 200);
            } else {
                return response()->json($user, 500);
            }
        } else {
            return response()->json($cooki, 500);
        }
    }
}
