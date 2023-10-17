<?php

use Illuminate\Support\Facades\Route;
use App\Http\Module\Product\Presentation\Controller\ProductController;

Route::post('create_product', [\App\Http\Module\Passanger\Presentation\Controller\PassangerController::class, 'createPassanger']);
