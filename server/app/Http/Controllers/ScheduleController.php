<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Schedule;
use Illuminate\Support\Facades\Validator;

class ScheduleController extends Controller
{

    public function getAllSchedules()
    {

        $schedules = Schedule::get();
        if ($schedules) {
            return response()->json($schedules, 200);
        }
        return response()->json(['error' => "Can't retrive schedules."], 400);
    }

    public function getScheduleById($id)
    {

        $schedule = Schedule::find($id);
        if ($schedule) {
            return response()->json($schedule, 200);
        }
        return response()->json(['error' => "Can't retrive schedule."], 400);
    }

    public function createSchedule(Request $request)
    {

        $schedule = new Schedule();

        $validator =  Validator::make($request->all(), [
            'description'              => 'required|min:5|max:1500',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 400);
        }

        $input = $request->all();
        $schedule->user_id = (int) $request->input('user_id');
        $schedule->fill($input)->save();
        return response()->json(['success' => $schedule], 200);
    }

    public function updateSchedule(Request $request, $schedule_date)
    {

        $schedule = Schedule::find($schedule_date);

        $validator =  Validator::make($request->all(), [
            'description'              => 'min:5|max:1500',

        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()], 400);
        }

        $input = $request->all();
        $schedule->fill($input)->save();
        return response()->json(['success' => $schedule], 200);
    }

    public function deleteSchedule($id)
    {
        $schedule = Schedule::find($id);
        if ($schedule) {
            $schedule->delete();
            return response()->json(['message' => `successfully deleted schedule with id: $id`], 200);
        }
        return response()->json(['error' => `Failed to delete schedule with id: $id`], 400);
    }
}
