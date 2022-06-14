<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $note = Note::find($request->id);
        $comment = $note->comments()->get();

        return response()->json($comment, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $comment = Comment::create([
            'note_id' => $request->note_id,
            'text' => $request->text,
        ]);

        return response()->json($comment, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Comment::destroy($id);

        return response()->json(['success' => 'success'], 204);

    }
}
