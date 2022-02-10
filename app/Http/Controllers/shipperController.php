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
use App\Models\statistic;
use App\Models\statistic_cs;

class shipperController extends Controller
{
    public function index_ship_order(Request $request)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->select('id')->first();
            if ($user) {
                $shipper_order = shipper_order::where('user_id', $user->id)->select('order_id')->get();
                if ($shipper_order->count()) {
                    if (isset($request->search)) {
                        $order = order::whereIn('orders.id', $shipper_order)->where($request->groupBy, 'like', '%' . $request->search . '%')->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                    } else {
                        $order = order::whereIn('orders.id', $shipper_order)->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                    }
                    return response()->json(['data_all' => $order], 200);
                }
            }
        }
    }
    public function ship_order_findDate(Request $request)
    {
        $cooki = $request->cookie('name');
        if ($cooki) {
            $user = User::where('remember_token', $cooki)->first();
            if ($user) {
                $shipper_order = shipper_order::where('user_id', $user->id)->select('order_id')->get();
                if ($shipper_order->count()) {
                    $order = order::whereBetween('orders.created_at', [$request->date, $request->date2])->whereIn('orders.id', $shipper_order)->join('ships', 'ships.order_id', '=', 'orders.id')->orderBy('orders.id', 'DESC')->paginate(10);
                }
                return response()->json(['data_all' => $order], 200);
            }
        }
    }
    public function detail($id)
    {
        $order = order_detail::where('order_id', $id)->orderBy('id', 'DESC')->get();
        return response()->json($order, 200);
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
                        'user_id' => $user->id,
                        'order_id' => $order->id,
                        'created_id' => Carbon::now('Asia/Ho_Chi_Minh')
                    ]);
                    return response()->json(['message' => 'successfully'], 200);
                }
            }
        }
    }
    public function changeStatus(Request $request)
    {
        $order = order::find($request->id);
        $order->status = $request->status;
        $order->save();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        if ($request->status == 3) {
            $statistic = statistic::where('created_at', $now)->first();
            if ($statistic) {
                $statistic->feeship += $order->feeship;
                $statistic->cod += $order->cod;
                $statistic->order = $statistic->order + 1;
                $statistic->save();
            } else {
                statistic::create([
                    'feeship' => $order->feeship,
                    'cod' => $order->cod,
                    'order' => 1,
                    'created_at' => $now
                ]);
            }
            $statistic_cs = statistic_cs::where('customer_id',$order->customer_id)->where('created_at', $now)->first();
            if ($statistic_cs) {
                $statistic_cs->feeship += $order->feeship;
                $statistic_cs->cod += $order->cod;
                $statistic_cs->order = $statistic_cs->order + 1;
                $statistic_cs->save();
            } else {
                statistic_cs::create([
                    'feeship' => $order->feeship,
                    'cod' => $order->cod,
                    'order' => 1,
                    'customer_id' => $order->customer_id,
                    'created_at' => $now
                ]);
            }
        }
        // return response()->json('success', 200);
    }
}
