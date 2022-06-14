<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $user = User::find($request->id);
        $notes = $user->notes()->get();

        return response()->json($notes, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $note = Note::create([
            'title' => $request->title,
            'text' => $request->text,
            'complete' => $request->complete,
            'user_id' => $request->user_id,
        ]);

        return response()->json($note, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->update($request->all());

        return response()->json(['success' => 'success'], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Note  $note
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $note = Note::findOrFail($id);
        $note->comments()->delete();
        $note->delete();

        return response()->json(['success' => 'success'], 204);
    }
}
