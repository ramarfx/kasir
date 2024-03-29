<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Home');
// });

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [ProductController::class, 'index'])->name('home');
Route::post('/payment', function (Request $request) {
  $data = [
    'total' => $request->total,
    'payment' => $request->payment,
    'phone' => $request->phone,
  ];

  $user = auth()->user();
  $products = Product::all();

  return Inertia::render('Payment', compact(['data', 'products', 'user']));
})->middleware(['payment', 'auth']);

Route::get('/payment', function () {
  $products = Product::all();
  $user = auth()->user();

  return Inertia::render('Payment', compact(['products', 'user']));
})->middleware(['payment', 'auth']);

require __DIR__ . '/auth.php';
