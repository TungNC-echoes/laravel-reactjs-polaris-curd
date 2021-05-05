<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $Users = User::paginate(1);
        return response()->json($Users);
    }

    /**
     * @param UserRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserRequest $request)
    {
        $input = $request->all();
        $user = User::create($input);
        return response()->json(['message'=> 'user created success',
            'user' => $user]);
    }

    /**
     * @param User $user
     * @return User
     *
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * @param UserRequest $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserRequest $request, User $user)
    {
        $user->full_name = $request->full_name();
        $user->address = $request->address();
        $user->phone_number = $request->phone_number();
        $user->email = $request->email();
        $user->save();

        return response()->json([
            'message' => 'User updated!',
            'user' => $user
        ]);
    }

    /**
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'message' => 'User deleted'
        ]);

    }
}
