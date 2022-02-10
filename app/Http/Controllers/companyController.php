<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\company;
use App\Models\customer;

class companyController extends Controller
{
    public function store(Request $request)
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
                company::where('customer_id', $user->id)->update(['status' => null]);
                $company = new company;
                $company->customer_id = $user_id;
                $company->name = $request->name;
                $company->phone = $request->phone;
                $company->city_id = $request->city_id;
                $company->district_id = $request->district_id;
                $company->wards_id = $request->wards_id;
                $company->city_name = $request->city_name;
                $company->district_name = $request->district_name;
                $company->wards_name = $request->wards_name;
                $company->address = $request->address;
                $company->status = 0;
                $company->save();
                return response()->json($company, 200);
            }
        }
        return response()->json('faild', 500);
    }
    public function update(Request $request)
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
                $company = company::find($request->id);
                $company->customer_id = $user_id;
                $company->name = $request->name;
                $company->phone = $request->phone;
                $company->city_id = $request->city_id;
                $company->district_id = $request->district_id;
                $company->wards_id = $request->wards_id;
                $company->city_name = $request->city_name;
                $company->district_name = $request->district_name;
                $company->wards_name = $request->wards_name;
                $company->address = $request->address;
                $company->save();
                return response()->json($company, 200);
            }
        }
        return response()->json('faild', 500);
    }
    public function getcompanyOrder(Request $request)
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
                $company = company::where('customer_id', $user_id)->where('status', '!=', null)->first();
                return response()->json(['data' => $company], 200);
            }
        }
        return response()->json('faild', 500);
    }
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
                if (isset($request->search)) {
                    $company = company::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();
                } else {
                    $company = company::where('customer_id', $user_id)->get();
                }
                return response()->json(['data' => $company], 200);
            }
        }
        return response()->json('faild', 500);
    }
    public function changeStatusCompany(Request $request)
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
                company::where('customer_id', $user_id)->update(['status' => null]);
                $company = company::find($request->id);
                $company->status = 0;
                $company->save();
                return response()->json($company, 200);
            }
        }
        return response()->json('faild', 500);
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
                $company = company::where('id', $id)->where('customer_id', $user_id)->delete();
                return response()->json($company, 200);
            }
        }
        return response()->json('faild', 500);
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
                    $company = company::where('customer_id', $user_id)->where('id', $key)->first();
                    if ($company) {
                        $company->delete();
                    }
                }
            }
        }
        return response()->json(['data' => $company], 200);
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
                $company = company::where('customer_id', $user_id)->where('id', $id)->first();
                return response()->json($company, 200);
            }
        }
    }
}
