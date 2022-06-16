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
        $user = User::where('id', $request->id)->orWhere('email', $request->email)->select('id', 'name', 'email')->firstOrFail();

        return response()->json($user);

    }

}
