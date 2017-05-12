<?php

namespace App\Http\Middleware;
use Illuminate\Contracts\Routing\Middleware;
use Illuminate\Http\Response;
use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Headers', 'Origin,X-Request-With,Accept,Authorization,X-Auth-Token,x-xsrf-token,Content-Type')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    }
}
