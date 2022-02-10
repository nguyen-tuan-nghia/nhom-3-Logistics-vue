<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\city;
use App\Models\district;
use App\Models\wards;
use App\Models\feeship;
use App\Models\town_shipping_fee;

class feeshipController extends Controller
{
    public function editPriceShip(Request $request)
    {
        $feeship = feeship::find($request->id);
        $feeship->price = $request->fee;
        $feeship->save();
        return response()->json($feeship, 200);
    }
    public function getAllCity()
    {
        return response()->json(['data' => city::get()], 200);
    }
    public function getAllDistrict()
    {
        return response()->json(['data' => district::get()], 200);
    }
    public function getAllwards()
    {
        return response()->json(['data' => wards::get()], 200);
    }
    public function findDistrict(Request $request)
    {
        return response()->json(['data' => district::where('matp', $request->id)->get()], 200);
    }
    public function findwards(Request $request)
    {
        return response()->json(['data' => wards::where('maqh', $request->id)->get()], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'fromcity' => 'required',
            'tocity' => 'required',
            'fee' => 'required'
        ]);
        if ($request->fromcity == $request->tocity) {
            return response()->json(['message' => 'You can not add the same place'], 400);
        }
        $fee = feeship::where('form_city_id', $request->fromcity)->where('to_city_id', $request->tocity)->first();
        if ($fee) {
            return response()->json(['message' => 'This location has been taken'], 400);
        }
        $feeship = new feeship;
        $feeship->form_city_id = $request->fromcity;
        $feeship->form_city_name = $request->fromcityname;
        $feeship->to_city_id = $request->tocity;
        $feeship->to_city_name = $request->tocityname;
        $feeship->price = $request->fee;
        $feeship->save();
        return response()->json($feeship, 200);
    }
    public function storeInTown(Request $request)
    {
        $request->validate([
            'city_id' => 'required|unique:town_shipping_fees',
            'feeIn' => 'required',
            'feeOut' => 'required'
        ]);
        $feeship = new town_shipping_fee;
        $feeship->city_id = $request->city_id;
        $feeship->city_name = $request->cityname;
        $feeship->price_in_town = $request->feeIn;
        $feeship->price_out_town = $request->feeOut;
        $feeship->save();
        return response()->json($feeship, 200);
    }
    public function index(Request $request)
    {
        if (isset($request->search)) {
            $feeship = feeship::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->paginate(10);
            $feeship_id = feeship::where($request->groupBy, 'like', '%' . $request->search . '%')->orderBy('id', 'DESC')->get();
        } else {
            $feeship = feeship::orderBy('id', 'DESC')->paginate(10);
            $feeship_id = feeship::orderBy('id', 'DESC')->get();
        }
        return response()->json(['data_all'=>$feeship,'data'=>$feeship_id], 200);
    }
    public function delete($id)
    {
        $feeship = feeship::find($id)->delete();
        return response()->json('ok', 200);
    }
    public function delete_checked(Request $request)
    {
        foreach ($request->selected as $key) {
            $feeship = feeship::where('id', $key)->first();
            if ($feeship) {
                $feeship->delete();
            }
        }
        return response()->json(['data' => $feeship], 200);
    }
    public function getfeeshipInOrder(Request $request)
    {
        if ($request->from == $request->to) {
            $town_shipping_fee = town_shipping_fee::where('city_id', $request->from)->first();
            if ($town_shipping_fee) {
                $price = $town_shipping_fee->price_in_town;
            } else {
                $price = 35000;
            }
        } else {
            $town_shipping_fee = town_shipping_fee::where('city_id', $request->from)->first();
            $feeship = feeship::where('form_city_id', $request->from)->where('to_city_id', $request->to)->first();
            if ($town_shipping_fee && $feeship) {
                $price = $town_shipping_fee->price_out_town + $feeship->price;
            } else {
                $price = 100000;
            }
        }
        return response()->json(['data' => $price], 200);
    }
}
