<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/add',[App\Http\Controllers\StudentController::class,'store'])->name('student.add');
Route::get('/getStudents',[App\Http\Controllers\StudentController::class,'create'])->name('student.add');
Route::get('/edit/{id}',[App\Http\Controllers\StudentController::class,'edit'])->name('student.edit');
Route::post('/update/{id}',[App\Http\Controllers\StudentController::class,'update'])->name('student.update');
Route::get('/delete/{id}',[App\Http\Controllers\StudentController::class,'destroy'])->name('student.delete');