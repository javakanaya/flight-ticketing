<?php

namespace App\Http\Module\Passenger\Application\Services\CreatePassenger;

use App\Http\Module\Passenger\Domain\Model\Passenger;
use App\Http\Module\Passenger\Infrastructure\Repository\PassengerRepository;

class CreatePassengerService
{

    public function __construct(
        private PassengerRepository $product_repository
    )
    {
    }

    public function execute(CreatePassengerRequest $request){
        $product = new Passenger(
            $request->nik,
            $request->nama,
        );

        $this->product_repository->save($product);
    }
}
