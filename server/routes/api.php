<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::get('me',        'AuthController@me');
    Route::post('login',    'AuthController@login');
    Route::post('logout',   'AuthController@logout');
    Route::post('refresh',  'AuthController@refresh');
    Route::post('register', 'AuthController@register');
});


// Schedules

Route::get('/schedules',                    'ScheduleController@getAllSchedules');
Route::get('/schedules/{id}',               'ScheduleController@getScheduleById');
Route::post('/schedules',                   'ScheduleController@createSchedule');
Route::put('/schedules/{id}',               'ScheduleController@updateSchedule');
Route::delete('/schedules/{id}',            'ScheduleController@deleteSchedule');
