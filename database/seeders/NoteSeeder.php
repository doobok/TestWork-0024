<?php

namespace Database\Seeders;

use App\Models\Note;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class NoteSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Note::factory(250)->create();

        Note::factory()->create([
            'title' => Str::random(10),
            'text' => Str::random(50),
        ]);
    }
}
