<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $products = Product::all();
    $user = auth()->user();
    return Inertia::render('Home', compact(['products', 'user']));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('/product/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreProductRequest $request)
  {
    $data = $request->validated();

    dd($data);

    if ($request->hasFile('image')) {
      $data['image'] = $request->file('image')->store('images', 'public');
    }

    Product::create($data);
  }

  /**
   * Display the specified resource.
   */
  public function show(Product $product)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Product $product)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(StoreProductRequest $request, Product $product)
  {

    Log::info('update product', $request->all());
    $data = $request->validated();

    // dd($data);

    if ($request->hasFile('image')) {
      $data['image'] = $request->file('image')->store('images', 'public');
    }

    $product->update($data);

    // return with();
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Product $product)
  {
    $product->delete();
  }
}
