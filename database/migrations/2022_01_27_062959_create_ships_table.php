<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ships', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('order_id');
            $table->string('from_name');
            $table->string('from_phone');
            $table->string('from_city_name');
            $table->string('from_district_name');
            $table->string('from_wards_name');
            $table->string('from_address');
            $table->string('to_name');
            $table->string('to_phone');
            $table->integer('to_city_id');
            $table->integer('to_district_id');
            $table->integer('to_wards_id');
            $table->string('to_city_name');
            $table->string('to_district_name');
            $table->string('to_wards_name');
            $table->string('to_address');
            $table->timestamps();
            $table->foreign('order_id')->references('id')->on('orders')->onUpdate('cascade')
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
        Schema::dropIfExists('ships');
    }
}
