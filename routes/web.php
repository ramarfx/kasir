<?php

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;

Route::get('/', [ProductController::class, 'index'])->name('home');
Route::resource('/product', ProductController::class)->middleware(['isAdmin', 'auth']);

Route::get('/dashboard', function () {
  $products = Product::all();
  return Inertia::render('Dashboard', compact(['products']));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('/payment', PaymentController::class)->only(['index', 'store'])->middleware(['payment', 'auth']);


require __DIR__ . '/auth.php';
