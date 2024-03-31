<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $products = Product::all();
      $user = auth()->user();

      return Inertia::render('Payment', compact(['products', 'user']));
    }
    
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
      $data = [
        'total' => $request->total,
        'payment' => $request->payment,
        'phone' => $request->phone,
      ];

      $user = auth()->user();
      $products = Product::all();

      return Inertia::render('Payment', compact(['data', 'products', 'user']));
    }
}
