<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Schema::disableForeignKeyConstraints();
        User::truncate();
        DB::table('schedules')->truncate();
        Schema::enableForeignKeyConstraints();

        User::create([
            'username'          => 'Luffy',
            'password'          => Hash::make('password'),
        ]);

        User::create([
            'username'          => 'Naruto',
            'password'          => Hash::make('password')

        ]);

        User::create([
            'username'          => 'Roger',
            'password'          => Hash::make('password')
        ]);

        User::create([
            'username'          => 'Zen',
            'password'          => Hash::make('password')

        ]);
    }
}
