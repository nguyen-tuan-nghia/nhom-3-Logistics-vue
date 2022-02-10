<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\role_user;
use App\Models\role;

class UserController extends Controller
{
    public function index(Request $request)
    {
        if (isset($request->permission)) {
            $role = role::where('name', $request->permission)->first();
            $role_user = role_user::where('role_id', $role->id)->select('user_id')->get();
            if (isset($request->search)) {
                    $User = User::whereIn('id', $role_user)->where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->paginate(10);
                    $User_id = User::whereIn('id', $role_user)->where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();

            } else {
                    $User = User::whereIn('id', $role_user)->orderBy('id', 'DESC')->paginate(10);
                    $User_id = User::whereIn('id', $role_user)->orderBy('id', 'DESC')->get();
            }
        } else {
            if (isset($request->search)) {
                $User = User::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->paginate(10);
                $User_id = User::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();
            } else {
                $User = User::orderBy('id', 'DESC')->paginate(10);
                $User_id = User::orderBy('id', 'DESC')->get();
            }
        }
        return response()->json(['data_all' => $User, 'data' => $User_id], 200);
    }
    public function delete($id)
    {
        $User = User::find($id);
        $User->delete();
        return response()->json('ok', 200);
    }
    public function delete_checked(Request $request)
    {
        foreach ($request->selected as $key) {
            $User = User::where('id', $key)->first();
            if ($User) {
                $User->delete();
            }
        }
        return response()->json(['data' => $User], 200);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required'
        ]);
        $role = role::where('name', $request->permission)->first();
        if ($role) {
            $User = new User;
            $User->name = $request->name;
            $User->email = $request->email;
            $User->password = md5($request->phone);
            $User->phone = $request->phone;
            $User->save();
            $role_user = role_user::create([
                'role_id' => $role->id,
                'user_id' => $User->id
            ]);
            return response()->json(['data' => $User], 200);
        }
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required'
        ]);
        $User = User::find($id);
        $User->name = $request->name;
        $User->password = md5($request->phone);
        $User->phone = $request->phone;
        $User->save();
        return response()->json($User, 200);
    }
}
