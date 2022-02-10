<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolePermissionCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_permission_customers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('role_customer_id');
            $table->unsignedBigInteger('customer_id');
            $table->timestamps();
            $table->foreign('role_customer_id')->references('id')->on('customer_roles')->onUpdate('cascade')
            ->onDelete('cascade');
            $table->foreign('customer_id')->references('id')->on('customers')->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_permission_customers');
    }
}
