<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\weightfee;
class weightController extends Controller
{
    public function store(Request $request)
    {
        weightfee::truncate();
        foreach($request->min as $key =>$val){
        $weightfee= new weightfee;
        $weightfee->min=$val;
        $weightfee->max=$request->max[$key];
        $weightfee->price=$request->price[$key];
        $weightfee->save();
    }
    return response()->json($weightfee,200);
    }
    public function index(){
        $fee=weightfee::get();
        return response()->json(['data'=>$fee],200);
    }
    public function getWeightfee(Request $request){
        $fee=weightfee::orderBy('id', 'ASC')->get();
        $price=0;
        if($fee->count()){
        foreach($fee as $key =>$val){
            if($val->min<=$request->weight&&$request->weight<=$val->max){
                $price=$val->price;
            }
        }if($price==0){
            $price=90000;
        }
    }else{
            $price=100000;
        }
        return response()->json(['data'=>$price],200);
    }
}
