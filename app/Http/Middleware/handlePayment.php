<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Symfony\Component\HttpFoundation\Response;

class handlePayment
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    // Log::info($request);
    // dd($request->all());

    if (!$request->payment && !$request->total && !$request->phone && $request->total == 0) {
      Log::info($request->total);

      return Redirect::route('home');
    }

    return $next($request);
  }
}
