<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/user-get', [\App\Http\Controllers\UserController::class, 'findUser']);
Route::post('/user-create', [\App\Http\Controllers\UserController::class, 'createUser']);

Route::get('/my-notes', [\App\Http\Controllers\NoteController::class, 'index']);
Route::post('/create-note', [\App\Http\Controllers\NoteController::class, 'store']);
Route::patch('/update-note/{id}', [\App\Http\Controllers\NoteController::class, 'update']);
Route::delete('/delete-note/{id}', [\App\Http\Controllers\NoteController::class, 'destroy']);
