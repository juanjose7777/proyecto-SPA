<?php

namespace App\Http\Controllers\api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Auth;


class UserController extends Controller
{
    public function current(){
        return Auth::user();
    }

    public function index()
    {
        $users = User::all();
        return [
            'users' => $users
        ];
    }

    public function store(Request $request) 
    {
        $messages = [
            'email.unique' => 'Este email ya se encuentra duplicado',
        ];

        $this->validate(request(), [
            'email' => ['required','max:100','unique:users'],
            'name' => ['required','max:100'],
            'password' => ['required','max:100'],

        ], $messages);
        
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = \Hash::make($request->password);
        $user->save();
        return response()->json(['user' =>$user]); 
    }

    public function update(Request $request){
        $user = User::findOrFail($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password){
           $user->password = \hash::make($request->password);
        }
        $user->save();
        return response()->json(['user' =>$user]);     
    }
}
