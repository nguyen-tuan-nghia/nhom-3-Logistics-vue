<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tbl_social;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Support\Facades\Cookie;;
class SocialController extends Controller
{
    public function index()
    {
      return view('welcome');
    }
    public function social(Request $request,$provider){
        $token=Str::random(10);
        $provider_info = Socialite::driver($provider)->stateless()->user();
        $account = tbl_social::where('provider',$provider)->where('provider_user_id',$provider_info->getId())->first();
        if($account){
            $User = User::find($account->user);
            $User->remember_token=$token;
            $User->save();
            Cookie::queue('name',$token, 60*24*60);
            // return response()->json(['message'=>'login '.$provider.' success'],200);
            return redirect('/');
        }else{
            $tbl_social = new tbl_social([
                'provider_user_id' => $provider_info->getId(),
                'provider' => $provider
            ]);
            $orang = User::where('email',$provider_info->getEmail())->first();
            if(!$orang){
                $orang = User::create([
                    'name' => $provider_info->getName(),
                    'email' => $provider_info->getEmail(),
                    'remember_token'=>$token,
                    'password' => ''
                ]);
            }
            $tbl_social->login()->associate($orang);
            $tbl_social->save();
            Cookie::queue('name',$token, 60*24*60);
            // return response()->json(['message'=>'login '.$provider.' success'],200);
            return redirect('/');
        }
    }
}
