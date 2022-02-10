<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\town_shipping_fee;
class townFeeshipController extends Controller
{
    public function editPriceShipTown(Request $request)
    {
        $town_shipping_fee=town_shipping_fee::find($request->id);
        $town_shipping_fee->price_in_town=$request->fee_in;
        $town_shipping_fee->price_out_town=$request->fee_out;
        $town_shipping_fee->save();
        return response()->json($town_shipping_fee, 200);
    }
    public function index(Request $request)
    {
        if (isset($request->search)) {
            $town_shipping_fee = town_shipping_fee::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id', 'DESC')->paginate(10);
            $town_shipping_fee_id = town_shipping_fee::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id', 'DESC')->get();
} else {
            $town_shipping_fee = town_shipping_fee::orderBy('id', 'DESC')->paginate(10);
            $town_shipping_fee_id = town_shipping_fee::orderBy('id', 'DESC')->get();
}
        return response()->json(['data_all'=>$town_shipping_fee,'data'=>$town_shipping_fee_id], 200);
    }
    public function delete($id)
    {
        $town_shipping_fee = town_shipping_fee::find($id)->delete();
        return response()->json('ok', 200);
    }
    public function delete_checked(Request $request)
    {
        foreach ($request->selected as $key) {
            $town_shipping_fee = town_shipping_fee::where('id', $key)->first();
                if ($town_shipping_fee) {
                    $town_shipping_fee->delete();
                }
        }
        return response()->json(['data' => $town_shipping_fee], 200);
    }
}
