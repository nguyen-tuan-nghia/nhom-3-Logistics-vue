<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;
use App\Models\User;
use App\Events\postsEnvent;

class PostsController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'title'=>'required',
            'content'=>'required',
            'select'=>'required',
            'slug'=>'required|unique:posts'
        ]);
        $posts=new Posts;
        $posts->title=$request->title;
        $posts->slug=$request->slug;
        $posts->content=$request->content;
        $posts->status=$request->select;
        $posts->keywords=$request->keywords;
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        $posts->image=$imageName;
        $posts->created_at=Carbon::now('Asia/Ho_Chi_Minh');
        $posts->save();
        //  broadcast(new postsEnvent($posts));
        return response()->json('ok',200);
    }
    public function index(Request $request){
        if(isset($request->search)){
            $posts=Posts::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->paginate(10);
            $posts_id=Posts::where($request->groupBy,'like','%'.$request->search.'%')->orderBy('id','DESC')->get();
        }else{
        $posts=Posts::orderBy('id','DESC')->paginate(10);
        $posts_id=Posts::orderBy('id','DESC')->get();
    }
        return response()->json(['data_all'=>$posts,'data'=>$posts_id],200);
    }
    public function edit($id)
    {
        $posts=Posts::where('id',$id)->first();
        return response()->json(['data'=>$posts],200);
    }
    public function update(Request $request, $id){
        $request->validate([
            'title'=>'required',
            'content'=>'required',
            'select'=>'required',
            'slug'=>'required'
        ]);
        $posts=Posts::find($id);
        $posts->title=$request->title;
        $posts->slug=$request->slug;
        $posts->content=$request->content;
        $posts->status=$request->select;
        $posts->keywords=$request->keywords;
        if(isset($request->image)){
            $path='images/'.$posts->image;
        if(File::exists($path)){
            unlink($path);
        }
        $imageName = time().'.'.$request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        $posts->image=$imageName;
    }
        $posts->updated_at=Carbon::now('Asia/Ho_Chi_Minh');
        $posts->save();
        return response()->json('ok',200);
    }
    public function delete($id){
        $posts=Posts::find($id);
        if($posts->image!=null){
            $path='images/'.$posts->image;
        if(File::exists($path)){
            unlink($path);
        }
    }
        $posts->delete();
        return response()->json('ok',200);
    }
    public function delete_checked(Request $request){
        foreach($request->selected as $key){
            $posts=Posts::where('id',$key)->first();
                if($posts){
                    $posts->delete();
                }
        }
        return response()->json(['data'=>$posts],200);
    }
}
