<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\User;
use Illuminate\Http\Request;

class StatisticController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $users = User::all()->count();
        $notes = Note::all()->count();

        return response()->json([
            'users' => $users,
            'notes' => $notes
        ], 200);
    }
}
