<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\order;
use App\Models\order_detail;
use App\Models\ship;
use App\Models\customer;
use Carbon\Carbon;
use App\Models\shipper_order;
use App\Models\User;
use App\Exports\ordersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Events\OrderEvent;
class orderController extends Controller
{
    public function export_csv($id){
        $array=explode(',',$id);
        return (new ordersExport($array))->download('orders.xlsx');
    }
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
                $order = new order;
                $order->customer_id = $user_id;
                $order->feeship = $request->feeship;
                $order->total_weight = $request->totalweight;
                $order->height = $request->height;
                $order->width = $request->width;
                $order->total_fee = $request->feeship + $request->totalweightfee;
                $order->cod = $request->cod;
                $order->status = 0;
                $order->created_at = Carbon::now('Asia/Ho_Chi_Minh');
                $order->save();
                foreach ($request->item_weight as $key => $val) {
                    $order_detail = new order_detail;
                    $order_detail->order_id = $order->id;
                    $order_detail->name = $request->item_name[$key];
                    $order_detail->weight = $val;
                    $order_detail->quantity = $request->item_quantity[$key];
                    $order_detail->save();
                }
                $ship = new ship;
                $ship->order_id = $order->id;
                $ship->from_name = $request->from_name;
                $ship->from_phone = $request->from_phone;
                $ship->to_name = $request->to_name;
                $ship->to_phone = $request->to_phone;
                $ship->from_city_name = $request->from_city_name;
                $ship->from_district_name = $request->from_district_name;
                $ship->from_wards_name = $request->from_wards_name;
                $ship->from_address = $request->from_address;
                $ship->to_city_id = $request->to_city_id;
                $ship->to_district_id = $request->to_district_id;
                $ship->to_wards_id = $request->to_wards_id;
                $ship->to_city_name = $request->to_city_name;
                $ship->to_district_name = $request->to_district_name;
                $ship->to_wards_name = $request->to_wards_name;
                $ship->to_address = $request->to_address;
                $ship->save();
                // broadcast(new OrderEvent($order, $ship))->toOthers();
                return response()->json('success', 200);
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
                    $order = order::where('customer_id', $user_id)->where('orders.'.$request->groupBy, 'like', '%' . $request->search . '%')->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                    $order_id = order::where('customer_id', $user_id)->where('orders.'.$request->groupBy, 'like', '%' . $request->search . '%')->orderBy('orders.id', 'DESC')->get();
                } else {
                    $order = order::where('customer_id', $user_id)->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                    $order_id = order::where('customer_id', $user_id)->orderBy('id', 'DESC')->get();
                }
                return response()->json(['data_all' => $order, 'data' => $order_id], 200);
            }
        }
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
                $order = order::where('id',$id)->where('customer_id', $user_id)->delete();
                return response()->json('ok', 200);
            }
        }
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
                    $order = order::where('id', $key)->where('customer_id', $user_id)->first();
                    if ($order) {
                        $order->delete();
                    }
                }
                return response()->json(['data' => $order], 200);
            }
        }
    }
    public function findDate(Request $request)
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
                $order = order::where('customer_id', $user_id)->whereBetween('orders.created_at', [$request->date, $request->date2])->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                $order_id = order::where('customer_id', $user_id)->whereBetween('orders.created_at', [$request->date, $request->date2])->orderBy('orders.id', 'DESC')->get();
            }
            return response()->json(['data_all' => $order, 'data' => $order_id], 200);
        }
    }
    public function edit($id)
    {
        $order = order::where('id', $id)->first();
        $order_detail = order_detail::where('order_id', $order->id)->get();
        $ship = ship::where('order_id', $order->id)->first();
        return response()->json(['order' => $order, 'ship' => $ship, 'order_detail' => $order_detail], 200);
    }
    public function update(Request $request, $id)
    {
        $order = order::find($id);
        $order->feeship = $request->feeship;
        $order->total_weight = $request->totalweight;
        $order->height = $request->height;
        $order->width = $request->width;
        $order->total_fee = $request->feeship + $request->totalweightfee;
        $order->cod = $request->cod;
        $order->status = 0;
        $order->created_at = Carbon::now('Asia/Ho_Chi_Minh');
        $order->save();
        foreach ($request->item_weight as $key => $val) {
            $order_detail = order_detail::where('order_id', $id)->first();
            $order_detail->name = $request->item_name[$key];
            $order_detail->weight = $val;
            $order_detail->quantity = $request->item_quantity[$key];
            $order_detail->save();
        }
        $ship = ship::where('order_id', $id)->first();
        $ship->from_name = $request->from_name;
        $ship->from_phone = $request->from_phone;
        $ship->to_name = $request->to_name;
        $ship->to_phone = $request->to_phone;
        $ship->from_city_name = $request->from_city_name;
        $ship->from_district_name = $request->from_district_name;
        $ship->from_wards_name = $request->from_wards_name;
        $ship->from_address = $request->from_address;
        $ship->to_city_id = $request->to_city_id;
        $ship->to_district_id = $request->to_district_id;
        $ship->to_wards_id = $request->to_wards_id;
        $ship->to_city_name = $request->to_city_name;
        $ship->to_district_name = $request->to_district_name;
        $ship->to_wards_name = $request->to_wards_name;
        $ship->to_address = $request->to_address;
        $ship->save();
        return response()->json('success', 200);
    }
    public function detail($id)
    {
        $order = order_detail::where('order_id', $id)->orderBy('id', 'DESC')->get();
        return response()->json($order, 200);
    }
    public function shipper($id)
    {
        $shipper_order=shipper_order::where('order_id',$id)->select('user_id')->first();
        $user = user::where('id', $shipper_order->user_id)->first();
        return response()->json($user, 200);
    }

//shipper all order
    public function index_ship_order(Request $request)
    {
        if (isset($request->search)) {
            $order = order::where('orders.status', 0)->where($request->groupBy, 'like', '%' . $request->search . '%')->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
        } else {
            $order = order::where('orders.status', 0)->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
        }
        return response()->json(['data_all' => $order], 200);
    }
    public function ship_order_findDate(Request $request)
    {
        $order = order::join('ships', 'ships.order_id', '=', 'orders.id')->whereBetween('orders.created_at', [$request->date, $request->date2])->where('orders.status', 0)->orderBy('orders.id', 'DESC')->paginate(10);
        return response()->json(['data_all' => $order], 200);
    }
    public function receive(Request $request)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                $order = order::find($request->id);
                if ($order->status != 0) {
                    return response()->json(['message' => 'this order have been taken'], 422);
                } else {
                    $order->status = 1;
                    $order->save();
                    shipper_order::create([
                        'user_id'=>$user->id,
                        'order_id'=>$order->id
                    ]);
                    return response()->json(['message' => 'successfully'], 200);
                }
            }
        }
    }
}
