<?php

use App\Http\Controllers\Admin\AdminAirlinesController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminRoutesController;
use App\Http\Controllers\Admin\AdminUsersController;

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

Route::get('/', [HomeController::class, 'index']);

// Route::get('/dashboard', [HomeController::class, 'index'])
//     ->middleware(['auth', 'verified'])
//     ->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/profile/bookings', [ProfileController::class, 'transaction'])->name('profile.transaction');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');

    // Route::get('/admin/routes', [AdminRoutesController::class, 'index'])->name('admin.routes');
    Route::resource('/admin/routes', AdminRoutesController::class, [
        'names' => [
            'index' => 'admin.routes',
            'show' => 'admin.routes.show',
            'create' => 'admin.routes.create',
            'store' => 'admin.routes.store',
            'edit' => 'admin.routes.edit',
            'update' => 'admin.routes.update',
            'destroy' => 'admin.routes.destroy'
        ]
    ]);

    Route::resource('/admin/airlines', AdminAirlinesController::class, [
        'names' => [
            'index' => 'admin.airlines',
            'show' => 'admin.airlines.show',
            'create' => 'admin.airlines.create',
            'store' => 'admin.airlines.store',
            'edit' => 'admin.airlines.edit',
            'update' => 'admin.airlines.update',
            'destroy' => 'admin.airlines.destroy'
        ]
    ]);

    Route::get('/admin/tickets', [AdminController::class, 'index'])->name('admin.tickets');

    Route::get('/admin/transaction', [AdminController::class, 'index'])->name('admin.transactions');

    Route::resource('/admin/users', AdminUsersController::class, [
        'names' => [
            'index' => 'admin.users',
            'show' => 'admin.users.show',
            'create' => 'admin.users.create',
            'store' => 'admin.users.store',
            'edit' => 'admin.users.edit',
            'update' => 'admin.users.update',
            'destroy' => 'admin.users.destroy'
        ]
    ]);
});

Route::get('/search', [TicketController::class, 'search'])->name('tickets.search');


Route::get('/flights/transaction/payment', function () {
    return Inertia::render('Payment');
});

Route::get('/flights', function () {
    return Inertia::render('Flights', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/flights/transaction', function () {
    return Inertia::render('Transaction');
})->name('Transaction-page');

require __DIR__ . '/auth.php';
