<?php

namespace App\Http\Module\Passenger\Presentation\Controller;

use App\Http\Module\Passenger\Application\Services\CreatePassenger\CreatePassengerRequest;
use App\Http\Module\Passenger\Application\Services\CreatePassenger\CreatePassengerService;
use Illuminate\Http\Request;

class PassengerController
{
    public function __construct(
        private CreatePassengerService $create_product_service
    )
    {
    }

    public function createProduct(Request $request){
        // dd($request);
        $request = new CreatePassengerRequest(
            $request->input('nik'),
            $request->input('nama'),
        );

        return $this->create_product_service->execute($request);
    }
}
