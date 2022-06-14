<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @yield('head')
</head>
<body>
<div id="app" class="bg-gray-100 font-sans leading-normal tracking-normal">
    @include('partials.header')
    <div class="container w-full mx-auto pt-20">
        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
            @yield('body')
        </div>
    </div>
    @include('partials.footer')
</div>
<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
