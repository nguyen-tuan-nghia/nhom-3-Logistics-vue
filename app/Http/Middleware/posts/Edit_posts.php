<?php

namespace App\Http\Middleware\posts;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;;
use App\Models\User;
use App\Models\permission;
class Edit_posts
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $cookie=$request->cookie('name');
        if($cookie){
            $user=User::where('remember_token',$cookie)->first();
            if($user){
                $permission=permission::where('user_id',$user->id)->where('name','Edit_posts')->first();
                if($permission){
                            return $next($request);
                }
            }
        }
        return response()->json('error',406);
     }
}
