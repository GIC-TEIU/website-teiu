<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;


Route::get('/test', [ContactController::class, 'test']);
Route::post('/sendEmail', [ContactController::class, 'sendEmail']);
Route::get('/pageWebsite/{path}', [PageController::class, 'index']);