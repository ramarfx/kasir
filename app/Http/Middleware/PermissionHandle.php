<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class PermissionHandle
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next): Response
  {
    $user = User::find(Auth::user()->id);

    if (!$user->hasRole('admin')) {
      Log::info("ini user biasa");
      return redirect()->route('home');
    }

    Log::info('ini admin coy');
    return $next($request);
  }
}
