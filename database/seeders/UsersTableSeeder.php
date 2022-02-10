<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\role;
use App\Models\permission;
use App\Models\role_user;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Admin = role::create([
            'name' => 'Admin',
        ]);
        $writer = role::create([
            'name' => 'Writer',
        ]);
        $Replier = role::create([
            'name' => 'Replier',
        ]);
        $shipper = role::create([
            'name' => 'shipper',
        ]);
        //admin-writer
        permission::create([
            'name' => 'View_posts',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_posts',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_posts',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_posts',
            'role_id' => $Admin->id
        ]);
        //writer
        permission::create([
            'name' => 'View_posts',
            'role_id' => $writer->id
        ]);
        permission::create([
            'name' => 'Create_posts',
            'role_id' => $writer->id
        ]);
        permission::create([
            'name' => 'Delete_posts',
            'role_id' => $writer->id
        ]);
        permission::create([
            'name' => 'Edit_posts',
            'role_id' => $writer->id
        ]);
        //admin-Replier
        permission::create([
            'name' => 'View_message',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_message',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_message',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_message',
            'role_id' => $Admin->id
        ]);
        //Replier
        permission::create([
            'name' => 'View_message',
            'role_id' => $Replier->id
        ]);
        permission::create([
            'name' => 'Create_message',
            'role_id' => $Replier->id
        ]);
        permission::create([
            'name' => 'Delete_message',
            'role_id' => $Replier->id
        ]);
        permission::create([
            'name' => 'Edit_message',
            'role_id' => $Replier->id
        ]);
        //admin-shipper
        // permission::create([
        //     'name' => 'View_order',
        //     'role_id' => $Admin->id
        // ]);
        // permission::create([
        //     'name' => 'Print_order',
        //     'role_id' => $Admin->id
        // ]);
        // permission::create([
        //     'name' => 'Change_status_order',
        //     'role_id' => $Admin->id
        // ]);
        //shipper
        permission::create([
            'name' => 'View_order',
            'role_id' => $shipper->id
        ]);
        permission::create([
            'name' => 'Print_order',
            'role_id' => $shipper->id
        ]);
        permission::create([
            'name' => 'Change_status_order',
            'role_id' => $shipper->id
        ]);
        //dashboard
        permission::create([
            'name' => 'View_dashboard',
            'role_id' => $Admin->id
        ]);
        //feeshipcity
        permission::create([
            'name' => 'View_feeship',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_feeship',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_feeship',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_feeship',
            'role_id' => $Admin->id
        ]);
        //feeship_town
        permission::create([
            'name' => 'View_feeship_town',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_feeship_town',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_feeship_town',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_feeship_town',
            'role_id' => $Admin->id
        ]);
        //weightfee
        permission::create([
            'name' => 'View_weightfee',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_weightfee',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_weightfee',
            'role_id' => $Admin->id
        ]);
        ////permission
        permission::create([
            'name' => 'View_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_permission',
            'role_id' => $Admin->id
        ]);

        permission::create([
            'name' => 'View_user_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Create_user_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Delete_user_permission',
            'role_id' => $Admin->id
        ]);
        permission::create([
            'name' => 'Edit_user_permission',
            'role_id' => $Admin->id
        ]);
        $user1 = User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => md5(111),
            'phone'=>'0909099099'
        ]);
        $user2 = User::create([
            'name' => 'writer',
            'email' => 'writer@gmail.com',
            'password' => md5(111),
            'phone'=>'0909099099'
        ]);
        $user3 = User::create([
            'name' => 'replier',
            'email' => 'replier@gmail.com',
            'password' => md5(111),
            'phone'=>'0909099099'
        ]);
        $user4 = User::create([
            'name' => 'shipper',
            'email' => 'shipper@gmail.com',
            'password' => md5(111),
            'phone'=>'0909099099'
        ]);
        role_user::create([
            'role_id' => $Admin->id,
            'user_id' => $user1->id
        ]);
        role_user::create([
            'role_id' => $writer->id,
            'user_id' => $user2->id
        ]);
        role_user::create([
            'role_id' => $Replier->id,
            'user_id' => $user3->id
        ]);
        role_user::create([
            'role_id' => $shipper->id,
            'user_id' => $user4->id
        ]);
    }
}
