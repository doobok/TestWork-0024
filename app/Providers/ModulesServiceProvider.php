<?php

namespace App\Providers;

use App\Models\Note;
use App\Models\User;
use Illuminate\Support\ServiceProvider;

class ModulesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->statisticsModule();
    }

    public function statisticsModule()
    {
        \View::composer('partials.first-screen', function ($view){
            $view->with('users', User::all()->count())->with('notes', Note::all()->count());
        });
    }
}
