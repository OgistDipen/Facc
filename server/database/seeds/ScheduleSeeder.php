<?php

use Illuminate\Database\Seeder;
use App\Schedule;
use App\User;



class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        Schema::disableForeignKeyConstraints();
        Schedule::truncate();
        Schema::enableForeignKeyConstraints();

        Schedule::create([
            'description'           => 'Test Description 1',
            'user_id'               => 1,
            'schedule_date'         => '2020-07-11'
        ]);
        Schedule::create([
            'description'           => 'Test Description 2',
            'user_id'               => 2,
            'schedule_date'         => '2020-07-14'

        ]);
        Schedule::create([
            'description'           => 'Test Description 3',
            'user_id'               => 3,
            'schedule_date'         => '2020-07-12'

        ]);
        Schedule::create([
            'description'           => 'Test Description 4',
            'user_id'               =>  4,
            'schedule_date'         => '2020-07-13'

        ]);
    }
}
