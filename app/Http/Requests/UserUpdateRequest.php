<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'full_name' => 'required|max:255',
            'address' => 'required|max:255',
            'phone_number' => 'required|min:5|max:255',
            'email' => 'required|min:5|max:255',
        ];

    }
}
