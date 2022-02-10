<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\customer;
use App\Models\statistic;
use App\Models\statistic_cs;
use Carbon\Carbon;

class statisticController extends Controller
{
    public function ad(Request $request)
    {
        $day = Carbon::now('Asia/Ho_Chi_Minh')->subdays(7)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        $statistic = statistic::whereBetween('created_at', [$day, $now])->orderBy('created_at','ASC')->get();
        foreach ($statistic as $key => $val) {
            $char[] = array(
                'order' => $val->order,
                'cod' => $val->cod,
                'date' => $val->created_at,
                'feeship'=>$val->feeship
            );
        }
        return response()->json($char, 200);
    }
    public function adfillall(Request $request)
    {
        $statistic = statistic::get();
        $order=0;
        $cod=0;
        $feeship=0;
        foreach ($statistic as $key => $val) {
            $order+=$val->order;
            $cod+=$val->cod;
            $feeship+=$val->feeship;
        }
        return response()->json(['order'=>$order,'cod'=>$cod,'feeship'=>$feeship], 200);
    }
    public function ad_findSelect(Request $request)
    {
        $day = Carbon::now('Asia/Ho_Chi_Minh')->subdays($request->day)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        $statistic = statistic::whereBetween('created_at', [$day, $now])->orderBy('created_at','ASC')->get();
        foreach ($statistic as $key => $val) {
            $char[] = array(
                'order' => $val->order,
                'cod' => $val->cod,
                'date' => $val->created_at,
                'feeship'=>$val->feeship
            );
        }
        return response()->json($char, 200);
    }
    public function ad_findDate(Request $request)
    {
        $statistic = statistic::whereBetween('created_at', [$request->date, $request->date2])->orderBy('created_at','ASC')->get();
        foreach ($statistic as $key => $val) {
            $char[] = array(
                'order' => $val->order,
                'cod' => $val->cod,
                'date' => $val->created_at,
                'feeship'=>$val->feeship
            );
        }
        return response()->json($char, 200);
    }
    public function customer(Request $request)
    {
        $cooki = $request->cookie('name');
        $day = Carbon::now('Asia/Ho_Chi_Minh')->subdays(7)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
                $statistic_cs = statistic_cs::where('customer_id', $user_id)->whereBetween('created_at', [$day, $now])->orderBy('created_at','ASC')->get();
                foreach ($statistic_cs as $key => $val) {
                    $char[] = array(
                        'order' => $val->order,
                        'cod' => $val->cod,
                        'date' => $val->created_at
                    );
                }
                return response()->json($char, 200);
            }
        }
    }
    public function customer_findSelect(Request $request)
    {
        $cooki = $request->cookie('name');
        $day = Carbon::now('Asia/Ho_Chi_Minh')->subdays($request->day)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        if ($cooki) {
            $user = customer::where('remember_token', $cooki)->first();
            if ($user) {
                if ($user->boss_id == null) {
                    $user_id = $user->id;
                } else {
                    $user_id = $user->boss_id;
                }
                $statistic_cs = statistic_cs::where('customer_id', $user_id)->whereBetween('created_at', [$day, $now])->orderBy('created_at','ASC')->get();
                foreach ($statistic_cs as $key => $val) {
                    $char[] = array(
                        'order' => $val->order,
                        'cod' => $val->cod,
                        'date' => $val->created_at
                    );
                }
                return response()->json($char, 200);
            }
        }
    }
    public function customer_findDate(Request $request)
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
                $statistic_cs = statistic_cs::where('customer_id', $user_id)->whereBetween('created_at', [$request->date, $request->date2])->orderBy('created_at','ASC')->get();
                foreach ($statistic_cs as $key => $val) {
                    $char[] = array(
                        'order' => $val->order,
                        'cod' => $val->cod,
                        'date' => $val->created_at
                    );
                }
                return response()->json($char, 200);
            }
        }
    }
    public function csfillall(Request $request)
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
        $statistic = statistic_cs::where('customer_id',$user_id)->get();
        $order=0;
        $cod=0;
        foreach ($statistic as $key => $val) {
            $order+=$val->order;
            $cod+=$val->cod;
        }
        return response()->json(['order'=>$order,'cod'=>$cod], 200);
    }}}
}
