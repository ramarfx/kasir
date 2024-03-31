<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      $permission1 = Permission::create(['name' => 'crud-product']);
      $permission2 = Permission::create(['name' => 'view-product']);

      $role1 = Role::create(['name' => 'admin']);
      $role1->givePermissionTo($permission1);

      $role2 = Role::create(['name' => 'user']);
      $role2->givePermissionTo($permission2);

      $user = User::factory()->create([
        'name' => 'admin',
        'email' => 'admin@gmail.com',
      ]);

      $user->assignRole($role1);

      $user2 = User::factory()->create([
        'name' => 'rama',
        'email' => 'rama@gmail.com'
      ]);

      $user2->assignRole($role2);
    }
}
