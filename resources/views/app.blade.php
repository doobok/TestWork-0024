<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <title>{{config('app.name')}}</title>
</head>
<body>
    <div id="app" class="bg-gray-100 font-sans leading-normal tracking-normal">
        <app></app>
    </div>

    <script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
