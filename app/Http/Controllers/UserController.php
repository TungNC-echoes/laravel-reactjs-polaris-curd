<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;

class UserController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $Users = User::paginate(10);
        return response()->json($Users);
    }

    /**
     * @param UserCreateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(UserCreateRequest $request)
    {
        $input = $request->all();
        $user = User::create($input);
        return response()->json(['message'=> 'user created success',
            'user' => $user]);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        return User::findOrFail($id);;
    }

    /**
     * @param UserUpdateRequest $request
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        var_dump($request);
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
