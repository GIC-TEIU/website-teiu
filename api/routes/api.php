<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;


Route::get('/test', [ContactController::class, 'test']);
Route::post('/sendEmail', [ContactController::class, 'sendEmail']);