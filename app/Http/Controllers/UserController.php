<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function findUser(Request $request)
    {
        $user = User::where('id', $request->id)->select('id', 'name')->firstOrFail();

        return response()->json($user);

    }

    public function createUser(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'password' => bcrypt(Str::random(6))
        ]);

        return response()->json($user);
    }
}
