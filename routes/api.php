<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\StatisticController;
use App\Http\Controllers\UserController;
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
// V1 API
Route::middleware('auth:sanctum')->prefix('v1')->group(function () {
    Route::get('/user', [UserController::class, 'findUser']);

    Route::get('/notes', [NoteController::class, 'index']);
    Route::post('/note', [NoteController::class, 'store']);
    Route::put('/note/{id}', [NoteController::class, 'update']);
    Route::delete('/note/{id}', [NoteController::class, 'destroy']);

    Route::get('/comments', [CommentController::class, 'index']);
    Route::post('/comment', [CommentController::class, 'store']);
    Route::delete('/comment/{id}', [CommentController::class, 'destroy']);

    Route::get('/statistic', [StatisticController::class, 'index']);

});

