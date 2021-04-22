<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{

    public function run()
    {
        $users = array(
            [
                'name' => 'juan jose',
                'email' => 'juan_trujillofl@fet.edu.co',
                'password' => \Hash::make('123456789')
            ]
        );

        foreach($users as $user){
             User::updateOrCreate($user);
        }
    }
}
