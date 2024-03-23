<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->numerify('product ##'),
            'price' => fake()->numerify('###000'),
            'image' => 'https://img.lazcdn.com/g/p/db5ee9c40b70ba33d459a160b5e3cc8a.jpg_960x960q80.jpg_.webp'
        ];
    }
}
